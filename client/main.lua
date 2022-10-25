local obj = nil

RegisterNetEvent('bub_mdt:client:openMDT', function()
    if obj == nil then
        local object = lib.requestModel(`prop_cs_tablet`);
        
        obj = CreateObject(object, GetEntityCoords(cache.ped), 1, 1, 1)
        AttachEntityToEntity(obj, cache.ped, GetPedBoneIndex(cache.ped, 28422), 0.0, 0.0, 0.03, 0.0, 0.0, 0.0, 1, 1, 0, 1, 0, 1)
    end
        
    lib.requestAnimDict('amb@world_human_seat_wall_tablet@female@base')    
    TaskPlayAnim(cache.ped, "amb@world_human_seat_wall_tablet@female@base", "generic_radio_enter", 8.0, 2.0, -1, 50, 2.0, 0, 0, 0)
end)
