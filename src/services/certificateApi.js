import api from './api';

// 证书相关API - 只保留必要的证书详情方法
export const certificateApi = {
  // 获取证书详情（通过新的API端点）
  getCertificateDetail: async (id,lauge) => {
    try {
      console.log('certificateApi: 准备请求证书详情，ID:', id);
      const data = await api.post('/api-form/restApi/form/invokeScript/gjzjcxsj', { ID_: id,lauge: lauge });
      console.log('certificateApi: 成功获取证书详情数据:', data);
      return data;
    } catch (error) {
      console.error('certificateApi: 获取证书详情失败:', error);
      throw error;
    }
  },
  
  // 更新打印状态
  updatePrintStatus: async (ids) => {
    try {
      // 将IDs数组转换为指定格式：('222','333')
      const formattedIds = `('${ids.join("','")}')`;
      const data = await api.post('/api-form/restApi/form/invokeScript/xgdyzt', {
        ID_: formattedIds,
        TYPE: "2"
      });
      console.log('certificateApi: 成功更新打印状态:', data);
      return data;
    } catch (error) {
      console.error('certificateApi: 更新打印状态失败:', error);
      throw error;
    }
  },
  //新增数据
  addCertificateDetail: async (params) => {
    try {

      const data = await api.post('/api-form/restApi/form/invokeScript/addCertificateDetail', { params:params });
      console.log('certificateApi: 成功获取证书详情数据:', data);
      return data;
    } catch (error) {
      console.error('certificateApi: 获取证书详情失败:', error);
      throw error;
    }
  }
};

export default certificateApi;