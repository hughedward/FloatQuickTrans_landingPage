/**
 * 数据库初始化脚本
 * 创建初始的下载统计记录
 */
const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function initDatabase() {
  try {
    console.log('正在初始化数据库...');
    
    // 检查是否已存在记录
    const existingRecord = await prisma.downloadStats.findUnique({
      where: { id: 1 }
    });
    
    if (existingRecord) {
      console.log('数据库已存在初始记录:', existingRecord);
      return;
    }
    
    // 创建初始记录
    const initialRecord = await prisma.downloadStats.create({
      data: {
        id: 1,
        macosCount: 0,
        windowsCount: 0
      }
    });
    
    console.log('成功创建初始记录:', initialRecord);
    
  } catch (error) {
    console.error('初始化数据库失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

initDatabase();