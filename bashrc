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

# opens up tmux automatically on bash startup ( opens the main session if you made it )
# [[ $TERM != "screen" ]] && exec tmux

# ALIASES
# shortcut to start vim
alias sv="sudo vim"
alias c="clear"

# uncomment this line if you are on a windows machine, this will not work in linux
# alias chrome="/c/'Program Files (x86)'/Google/Chrome/Application/chrome.exe"


# not sure what this does
set -o vi


export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

