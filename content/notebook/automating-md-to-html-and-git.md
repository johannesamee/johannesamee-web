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
  if test (count $argv) -lt 2
    echo "Usage: notebook new TITLE"
    return 1
  end
  set cmd $argv[1]
  if test $cmd = "new"
    set title $argv[2]
    cd ~/Documents/repos/johannesamee-web
    mkdir -p content/notebook
    set path "notebook/$title.md"
    hugo new $path
    nvim "content/notebook/$title.md"
  else if test $cmd = "deploy"
    cd ~/Documents/repos/johannesamee-web
    git add content/notebook
    gcm -- && git push origin main
    echo "Changes committed and pushed."
  else
    echo "Unknown subcommand: $cmd"
    return 2
  end
end
abbr -a nb 'notebook new'
abbr -a nd 'notebook deploy'
```
