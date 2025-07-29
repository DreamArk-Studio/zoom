# Zoom - 玩家缩放插件

![Minecraft](https://img.shields.io/badge/Minecraft-1.21%2B-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

一个简单而强大的玩家缩放插件，让你可以自由调整玩家大小！

## 📌 插件信息

- **名称**: Zoom  
- **作者**: 星雲Nebulae (@Nebulae)  
- **工作室**: DreamArk Studio    

## 🎯 功能

✅ 缩放玩家大小 - 支持自定义比例 (0.1 ~ 10.0)  
✅ 目标玩家支持 - 可以调整自己或其他玩家的大小  
✅ 恢复默认大小 - 一键还原玩家原始尺寸  
✅ 安全限制 - 防止设置过大或过小的比例  

## 📜 命令列表

### 1. 缩放玩家 `/zoom`

| 命令格式 | 描述 | 示例 |
|----------|------|------|
| `/zoom` | 将自己缩小一半 | `/zoom` |
| `/zoom <比例>` | 设置自己为指定比例 | `/zoom 0.3` |
| `/zoom <玩家>` | 缩小指定玩家 | `/zoom Steve` |
| `/zoom <玩家> <比例>` | 设置玩家为指定比例 | `/zoom Steve 2.0` |

### 2. 恢复默认大小 `/resetsize` (别名: `/rsize`)

| 命令格式 | 描述 | 示例 |
|----------|------|------|
| `/resetsize` | 恢复自己默认大小 | `/resetsize` |
| `/resetsize <玩家>` | 恢复玩家默认大小 | `/rsize Steve` |

## 🛠️ 安装方法

1. 下载 `Zoom.js` 插件文件  
2. 放入 LeviLamina 服务器的 `plugins` 文件夹  
3. 重启服务器或重载插件  

## 📝 使用示例

```bash
# 将自己缩小一半
/zoom

# 设置自己为 0.3 倍大小
/zoom 0.3

# 将玩家 Steve 放大 2 倍
/zoom Steve 2.0

# 恢复自己的默认大小
/resetsize

# 恢复 Steve 的默认大小
/rsize Steve
```

## 📜 开源许可

**MIT License** | © 2025 DreamArk Studio  

---

🚀 **让 Minecraft 世界变得更加有趣！** 🎮
