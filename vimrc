"""""" CORE COMMANDS """""""
set nocompatible
imap jj <ESC>
let mapleader = '\'
set number
set relativenumber
colorscheme desert 
" colo japanesque
" colo 3dglasses
" colo PapayaWhip 
" colo donbass 
" colorscheme holokai 
"colo ChocolateLiquor
"colorscheme cyberpunk 
"colorscheme molokai 
filetype plugin indent on
syntax on
set clipboard=unnamed
" set clipboard=unnamedplus
" show existing tab with 4 spaces width
set tabstop=4
" when indenting with '>', use 4 spaces width
set shiftwidth=4
" On pressing tab, insert 4 spaces
set expandtab
" automatically set indent of new line
set autoindent
" works mostly
set smartindent

" word wrap without line breaks
set wrap
set linebreak
set nolist " list disables linebreak
set textwidth=0
set wrapmargin=0 " wrap lines when coming within n characters from side

set pastetoggle=<f2>
set history=1000

" set filetype tabs
"
" Section AutoGroups {{{
" file type specific settings
augroup configgroup
    autocmd!
    autocmd Filetype sass setlocal ts=2 sw=2 expandtab
    autocmd Filetype scss setlocal ts=2 sw=2 expandtab
    autocmd FileType yaml setlocal ts=2 sts=2 sw=2 expandtab
    autocmd FileType make setlocal ts=8 sts=8 sw=8 noexpandtab
    autocmd FileType ruby setlocal ts=2 sts=2 sw=2 expandtab
    autocmd FileType html setlocal ts=4 sts=4 sw=4 noexpandtab indentkeys-=*<return>
    autocmd FileType jade setlocal ts=2 sts=2 sw=2 noexpandtab
    autocmd FileType markdown,textile setlocal textwidth=0 wrapmargin=0 wrap spell
    autocmd FileType .xml exe ":silent %!xmllint --format --recover - 2>/dev/null"

    " close help files on 'q'
    autocmd FileType help nnoremap q :bd<cr>
augroup END

set omnifunc=phpcomplete#CompletePHP


""""""" PLUGINS """"""""
set rtp+=~/.vim

" Load up all of our plugins
if filereadable(expand("~/.vimrc.bundles"))
  source ~/.vimrc.bundles
endif


" NERDTREE
let g:NERDTreeWinSize=20

" SYNTASTIC 
" use :Helptags to learn more
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_loc_list_height=2

" Better :sign interface symbols
let g:syntastic_error_symbol = '✗'
let g:syntastic_warning_symbol = '!'

" On by default, turn it off for html
let g:syntastic_mode_map = { 'mode': 'active',
            \ 'active_filetypes': [''] }
         "   \ 'passive_filetypes': ['html'] }

" Use jshint (uses ~/.jshintrc)
let g:syntastic_javascript_checkers = ['jshint']
" let g:syntastic_javascript_eslint_exec = 'eslint_d'
" let g:syntastic_javascript_checkers = ['eslint']

" PHP syntastic settings
let g:syntastic_php_checkers = ['php', 'phpcs', 'phpmd']

" SASS syntastic settings
" let g:syntastic_sass_checkers = ['sass_lint']
let g:syntastic_scss_checkers = ['scss_lint']

" HTML5 syntastic settings
" let g:syntastic_html_tidy_exec = 'tidy'
" let g:syntastic_scss_checkers = ["tidy"]

" XML syntastic settings
let g:syntastic_xml_checkers=["xmllint"]

" ARILINE settings
let g:airline_theme='base16color'
" let g:airline_theme='tomorrow'
" let g:airline_theme='cool'
" let g:airline_theme='base16_isotope'
" let g:airline_theme='monokai'
" let g:airline_theme='badwolf'
" let g:airline_theme='base16_atelierdune'
" let g:airline_theme='base16_pop'
" let g:airline_theme='base16_shapeshifter'
" let g:airline_theme='badwolf'
" let g:airline_theme='hybridline'
" let g:airline_theme='molokai'
" let g:airline_theme='simple'
" let g:airline_theme='understated'
" let g:airline_theme='wombat'
" let g:airline_theme='xtermlight'
set t_Co=256



""""""" MISC """"""""

set scrolloff=30 " Keep 3 lines below and above the cursor

if has('mouse')
    set mouse=a
    " set ttymouse=xterm2
endif

" faster redrawing
set ttyfast
set diffopt+=vertical

set laststatus=2 " show the satus line all the time

" disable Ex mode
noremap Q <NOP>

" activate spell-checking alternatives
nmap ;s :set invspell spelllang=en<cr>
