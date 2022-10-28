--[[ FX Information ]] --
fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
game 'gta5'

--[[ Resource Information ]] --
name 'bub_mdt'
version '0.0.1'
description 'MDT for overextended framework'
author 'Bubble'
repository 'https://github.com/BubbleDK/bub_mdt'

--[[ Manifest ]] --
dependencies {
    'ox_core',
	'ox_lib',
	'ox_core'
}

shared_scripts {
	'@ox_lib/init.lua',
	'shared/utils.lua'
}

client_scripts {
	'@ox_core/imports/client.lua',
	'client/main.lua',
}

server_scripts {
	'@ox_core/imports/server.lua',
	'server/main.lua'
}

ui_page 'web/dist/index.html'

files {
	'config.json',
	'web/dist/index.html',
	'web/dist/**/*'
}
