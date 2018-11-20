source ~/.git-prompt.sh

# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions

# isaac
if [ -f $HOME/.bash_aliases ]
then
  . $HOME/.bash_aliases
fi

# custom functions
# auto cd into directory after making it
mk ()
{
  mkdir -p -- "$1" &&
    cd -P -- "$1"
}

# opens up tmux automatically on bash startup ( opens the main session if you made it )
# [[ $TERM != "screen" ]] && exec tmux

# ALIASES
# shortcut to start vim
alias sv="sudo vim"
alias c="clear"
alias run="npm run"
alias tkill="pkill -f tmux"
alias tstart="tmux new session \; split-window -h -p 70 \; split-window -v -p 30 \; split-window -h -p 50\; select-pane -t 1 \; split-window -h -p 10"
#ref: https://stackoverflow.com/questions/5609192/how-to-set-up-tmux-so-that-it-starts-up-with-specified-windows-opened

# uncomment this line if you are on a windows machine, this will not work in linux
# alias chrome="/c/'Program Files (x86)'/Google/Chrome/Application/chrome.exe"


# not sure what this does
set -o vi


export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

# github passphrase automation
# env=~/.ssh/agent.env

# agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

# agent_start () {
#   (umask 077; ssh-agent >| "$env")
#   . "$env" >| /dev/null ; }

#   agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running
# agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

# if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
#   agent_start
#   ssh-add
# elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
#   ssh-add
# fi

# unset env
