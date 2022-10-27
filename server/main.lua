local function isAuthorised(source)
    if Ox.GetPlayer(source).hasGroup(Config.PoliceGroups) then return true end

    return false
end
exports('isAuthorised', isAuthorised)

RegisterNetEvent('bub_mdt:server:openMDT', function()
    local authorised = source == nil or isAuthorised(source)

    if authorised then
        TriggerClientEvent('bub_mdt:client:openMDT', source)
    end
end)

lib.addCommand('police', 'mdt', function()
    local authorised = source == nil or isAuthorised(source)

    if authorised then
        TriggerClientEvent('bub_mdt:client:openMDT', source)
    end
end)