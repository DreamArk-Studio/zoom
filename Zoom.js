ll.registerPlugin(
    /* name */
    "Zoom",
    /* introduction */
    "缩放玩家大小",
    /* version */
    [1, 0, 0],
    /* otherInformation */
    {
        "author": "星雲Nebulae"
    }
);

logger.info('✅ [Zoom] 插件已启动🤵作者：@Nebulae🏢DreamArk Studio');

mc.listen("onServerStarted", () => {
    // 注册缩小命令
    const zoomCmd = mc.newCommand("zoom", "缩小玩家体积", PermType.Any);
    
    // 添加可选参数
    zoomCmd.optional("scale", ParamType.Float); // 直接指定缩放比例
    zoomCmd.optional("target", ParamType.Player); // 目标玩家
    
    // 添加命令重载
    zoomCmd.overload([]);                  // /zoom
    zoomCmd.overload(["scale"]);           // /zoom <scale>
    zoomCmd.overload(["target"]);          // /zoom <target>
    zoomCmd.overload(["target", "scale"]); // /zoom <target> <scale>
    
    zoomCmd.setCallback((_cmd, origin, output, results) => {
        // 确定目标玩家
        const target = results.target ? results.target[0] : origin.player;
        if (!target) {
            output.error("请指定一个有效的玩家!");
            return;
        }
        
        // 计算新比例
        let newScale;
        if (results.scale !== undefined) {
            newScale = results.scale; // 使用指定的比例
        } else {
            newScale = 0.5;
        }
        
        // 限制比例范围 (0.1-10.0)
        newScale = Math.max(0.1, Math.min(10.0, newScale));
        
        // 设置新比例
        const success = target.setScale(newScale);
        
        if (success) {
            const name = target === origin.player ? "你" : target.name;
            output.success(`§a${name}的缩放比例已设置为: ${newScale.toFixed(2)}`);
        } else {
            output.error("§c缩放失败!");
        }
    });
    
    zoomCmd.setup();
    
    // 注册恢复命令
    const resetCmd = mc.newCommand("resetsize", "恢复默认大小", PermType.Any);
    resetCmd.setAlias("rsize"); // 别名
    
    resetCmd.optional("target", ParamType.Player);
    
    resetCmd.overload([]);         // /resetsize
    resetCmd.overload(["target"]); // /resetsize <target>
    
    resetCmd.setCallback((_cmd, origin, output, results) => {
        const target = results.target ? results.target[0] : origin.player;
        if (!target) {
            output.error("请指定一个有效的玩家!");
            return;
        }
        
        const success = target.setScale(1.0); // 重置为1.0
        
        if (success) {
            const name = target === origin.player ? "你" : target.name;
            output.success(`§a${name}已恢复默认大小!`);
        } else {
            output.error("§c恢复大小失败!");
        }
    });
    
    resetCmd.setup();
});
