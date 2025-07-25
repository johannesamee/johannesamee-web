+++
date = '2025-07-25'
draft = true
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
