+++
date = '2025-07-25'
draft = false
title = 'Automating Md to Html and Git'
toc = true
autonumber = true
+++

## Draft header
```fish
brew install llm
llm keys set anthropic
curl -Lo ~/.config/fish/functions/gcm.fish https://gist.githubusercontent.com/wipash/1d9a92006643ac5823219c5c6f20da89/raw/gcm-llm.fish
```

Extend the notebook function in fish config
```fish
function notebook
  set cmd $argv[1]
  if test $cmd = "new"
    if test (count $argv) -lt 2
      echo "Usage: notebook new TITLE"
      return 1
    end
    set title $argv[2]
    cd ~/Documents/repos/johannesamee-web
    mkdir -p content/notebook
    set path "notebook/$title.md"
    hugo new $path
    nvim "content/notebook/$title.md"
  else if test $cmd = "deploy"
    cd ~/Documents/repos/johannesamee-web
    git add content/notebook
    # Check for staged changes
    if test (git diff --cached --quiet; echo $status) -eq 1
      if gcm --
        git push origin main
        echo "Changes committed and pushed."
      else
        echo "gcm failed, using manual commit message."
        git commit -am "notebook: update"
        git push origin main
        echo "Changes committed and pushed with manual message."
      end
    else
      echo "No staged changes to commit."
    end
  else
    echo "Unknown subcommand: $cmd"
    return 2
  end
end
abbr -a nb 'notebook new'
abbr -a nd 'notebook deploy'
```

Also changing the gcm script and removing args from the commit echos.
```fish
git commit $argv --file -
```
changed to
```fish
git commit --file -
```

Below is the gcm function located in fish/functions
<details>
  <summary>Show code</summary>
{{< highlight fish >}}
function gcm
  # Check if llm is installed, if not, install it
  if not type -q llm
      echo "'llm' is not installed. Attempting to install it using brew..."
      if brew install llm
          echo "'llm' installed successfully."
      else
          echo "Failed to install 'llm'. Please install it manually and try again."
          return 1
      end
  end
  
  # Check if an API key is set up for llm
  set llm_keys (llm keys)
  if test "$llm_keys" = "No keys found"
      echo "No API key found for 'llm'. You need to set it up."
      llm keys set openai
      if test $status -ne 0
          echo "Failed to set up the OpenAI key. Please try again manually."
          return 1
      else
          echo "OpenAI key set successfully."
      end
  end

  # Function to generate commit message
  function generate_commit_message
      set -l prompt_text "
Below is a diff of all changes, coming from the command:
```
git diff -U1000 --cached
```
Please generate a concise, one-line commit message that accurately summarises all the changes, following the
Conventional Commits style.
Follow this by an empty line, then a short, terse description in one sentences of the changes contained within
this commit, only covering detail not included in the summary. The description line should contain no capitals
or punctuation, and be as brief and blunt as possible.
Don't wrap your response in backticks or any other characters.

----------
"
      set -l diff_output

      if contains -- -a $argv
          set diff_output (git diff -U1000 HEAD)
      else
          set diff_output (git diff -U1000 --cached)
      end

      set prompt_text "$prompt_text$diff_output"

      echo $prompt_text | llm | string collect

  end

  # Function to read user input
  function read_input
      set -l prompt $argv[1]
      read -P $prompt reply
      echo $reply
  end

  # Main script
  echo "Generating AI-powered commit message..."
  set commit_message (generate_commit_message)

  while true
      echo -e "Proposed commit message:\n"
      echo -e "$commit_message"
      echo -e ""

      set choice (read_input "Do you want to (c)ancel, (a)ccept, (e)dit or (r)egenerate? ")

      switch $choice
          case 'a' 'A' ''
              if echo "$commit_message" | git commit --file -
                  echo "Changes committed successfully!"
                  return 0
              else
                  echo "Commit failed. Please check your changes and try again."
                  return 1
              end
          case 'e' 'E'
              set commit_message (read -P "Enter your commit message: " -m)
              if [ -n "$commit_message" ]
                  if echo "$commit_message" | git commit --file -
                      echo "Changes committed successfully with your message!"
                      return 0
                  else
                      echo "Commit failed. Please check your message and try again."
                      return 1
                  end
              else
                  echo "Empty commit message. Please try again."
              end
          case 'r' 'R'
              echo "Regenerating commit message..."
              set commit_message (generate_commit_message)
          case 'c' 'C' 'q' 'Q'
              echo "Commit cancelled."
              return 1
          case '*'
              echo "Invalid choice. Please try again."
      end
  end
end
{{< /highlight >}}
</details>
