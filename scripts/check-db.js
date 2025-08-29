const { PrismaClient } = require('../src/generated/prisma');

async function checkDatabase() {
  const prisma = new PrismaClient();
  
  try {
    console.log('检查数据库连接...');
    
    // 查询所有下载统计记录
    const stats = await prisma.downloadStats.findMany();
    console.log('数据库中的记录:', stats);
    
    // 如果没有记录，创建一条
    if (stats.length === 0) {
      console.log('创建初始记录...');
      const newStats = await prisma.downloadStats.create({
        data: {
          id: 1,
          macosCount: 0,
          windowsCount: 0
        }
      });
      console.log('创建的记录:', newStats);
    }
    
  } catch (error) {
    console.error('数据库错误:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();