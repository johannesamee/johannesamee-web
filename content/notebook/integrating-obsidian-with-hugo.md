+++  
date = '2025-07-25'  
draft = true  
title = 'Integrating Obsidian to Hugo workflow'  
description = 'How I integrated Obsidian as my editor of choice to my Hugo workflow.'  
summary = 'How I integrated Obsidian as my editor of choice to my Hugo workflow.'  
toc = true  
autonumber = true  
+++

## The problem

I love Neovim, I love customizing my Neovim config, I love optimizing my Neovim config.  
There's still a big user experience problem for me related to working with markdown files and content, Neovim cannot beat Obsidian in my experience.

At this point, Obsidian is so deeply rooted in my way of thinking and, honestly, my muscle memory when working with personal information / knowledge bases / notes. I've been using Obsidian for so many years now, on and off but always as the baseline.  
If I want to set myself up for success, I cannot ignore that part, I need to set up an integration because I know I will fall back to using Obsidian when things change.

I will still keep chasing the dragon, that one day, Neovim will be the one true tool for all my needs. Or maybe more accurately that _I_ will reach that enlightened state to be able to let go of my earthly attachments so that I can handle Neovim in its fullness.  
Until then, I still need to accept my human nature and create the Obsidian plugin to help me towards the path of enlightenment.

TLDR;  
If I can't fall back to using Obsidian to write my markdown files to publish, I will write less.  
Therefore I need to integrate Obsidian to my Notebook posting workflow.

## To use AI or to not use AI

This is a question close to my heart, applicable to many areas in these times, not just coding.  
I will most certainly write more about this topic in depth in the future but let's just say that the particular problem I want to solve right now and the outcome is specifically about making it as easy as possible for me to publish my thoughts. This makes the equation really simple, I will lose an opportunity to learn more about Obsidian plugins, I will not develop a deeper understanding of how to make changes without the help of AI, and I am OK with that in this situation.

Another important note is that I won't be publishing or trying to make this plugin publicly available, which means that I can ignore many security concerns (_not all of course_).

## The starting prompt

Apologies for the sloppy late-night grammar, it's not my finest work. But hey, I got there in the end!

```
I want to create a plugin for Obsidian so I can use Obsidian as the editor for my markdown files that will be converted to html pages by Hugo.  

Help me to start this project, analyze the goal and ask me questions until all information and requirements are unearthed and I can use my own plugin for Obsidian to enhance my experience when writing markdown pages to publish to my hugo-powered website.  
  
Start with strategically planning the overarching process and focus on the most important requirements that you need to understand from me and my situation. Then we will iterate until perfection. Is that understood?
```

My AI-powered coding workflow of choice analyzed my repo and asked some clarifying questions to which I gave this follow-up-prompt:

```
1. Right now I start by creating a new markdown file from my fish shell with a custom abbreviation setup that creates the markdown file and then opens it in neovim.  
When I am done writing the content in neovim I save the file and use my function+abbreviation setup for my fish shell to stage, commit (using a llm integration to create a commit message based on the changes made), and then push to my git repo.  
When a change is made in the main branch of my repo, vercel automatically builds, with hugo, a new static webapp and deploys it to my domain.  
2. I have a separate vault for all my other work. I don't mind having a separate vault for this project. If it is just as easy to use a folder / configuration from my main vault, that is fine, but I don't want to add complexity just because I want to have the hugo-blog content in the same vault  
3. I really don't have an opinion, the most widely supported should be good  
4. Yes, I want to be able to create a new md file in obsidian, work on it as long as I want and then choose to publish it from obsidian when I'm done  
5. If possible that would be cool, but if it adds to much complexity it is not worth it  
6. I have not worked with images yet, but I would like to keep the workflow within obsidian  
7. the pain point is that my current setup with neovim doesn't feel smooth enough because I need to either have multiple tabs open or enter / exit neovim to execute shell commands for git to publish and so on
```

Some more clarifying questions was generated to which I prompted:

```
1. local git config is fine  
2. I'm using the brew llm package with a custom fish script but I am fine with changing this setup for anything that can use my anthropic key to generate a commit message based on git diffs  
3. Yes, the plugin should have permission to access and run specific shell commands  
4. The content folder in the Hugo project should be configurable  
5. yes pushing to git is enough  
6. yes the preview in browser is absolutely good enough
```

When the first iteration was complete I wanted to ensure that the task was not done yet and asked for a step-by-step follow-up to find and fix any potential issues.

```
Please guide me step-by-step through the process of installing and testing the plugin, ensuring that it works while debugging any errors that might arise
```

After a few back and fourths of me following the instructions and providing details with the steps I took and the errors that appeared, I had a working personal Obsidian plugin that closed the gap between Hugo and my Obsidian-brain.

## Next steps

1. The LLM generated commit messages don't seem to work as well as before, I want to either hook in my existing setup or look in to why the current setup isn't up to par
2. Archetypes from Hugo doesn't seem to work, I need to either hook up my current "template" from Hugo or focus on streamlining this in the Obsidian plugin