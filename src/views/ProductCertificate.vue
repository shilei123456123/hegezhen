<template>
  <div class="certificate-container">
    <button class="print-button" @click="printCertificate">
      <i class="fas fa-print"></i> 打印
    </button>

    <div v-for="(cert, index) in certificateData" :key="index" class="certificate-wrapper">
      <table class="certificate-table">
        <tbody>
        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text" >合格证编号</div>
              <div class="english-text">{{ cert.CERTIFICATE_NO1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="english-text">{{ cert.CERTIFICATE_NO }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">产品名称</div>
              <div class="english-text">{{ cert.PRODUCT_NAME1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line" style="margin-top: -0.2cm">
              <div class="chinese-text">{{ cert.PRODUCT_NAME }}</div>
              <div class="english-text">{{ cert.PRODUCT_NAME_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">产品型号</div>
              <div class="english-text">{{ cert.PRODUCT_MODEL1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="english-text">{{ cert.PRODUCT_MODEL }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">产品识别代码</div>
              <div class="english-text">{{ cert.PIN1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="english-text">{{ cert.PIN }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">发动机编号&nbsp;&nbsp;&nbsp;</div>
              <div class="english-text">{{ cert.ENGINE_NO1}}</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(1.58)">

                          <div class="chinese-text2" style="margin-left: 0.3cm; margin-top: -0.2cm; /* 文本左对齐 */line-height: 0.79cm; max-height: 1.58cm; overflow: hidden !important; white-space: pre-line; width: 100%;">{{ cert.ENGINE_NO}}</div>

          </td>
          <td class="label-cell" colspan="5" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">底盘编号</div>
              <div class="english-text">{{ cert.CHASSIS_NO1}}</div>
            </div>
          </td>
          <td class="value-cell" colspan="7" :style="getCellStyle(1.58)">

                          <div class="chinese-text2" style="margin-left: 0.3cm; margin-top: -0.2cm; /* 文本左对齐 */line-height: 0.79cm; max-height: 1.58cm; overflow: hidden !important; white-space: pre-line; width: 100%;">{{ cert.CHASSIS_NO}}</div>

          </td>
        </tr>

        <tr>
          <td class="inspection-cell" colspan="24" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">
                经检验，本产品符合 {{ cert.INSPECTION_CERTIFICATION }} 规定，确认合格，准予出厂。
              </div>
              <div class="english-text">
                <div>{{ cert.INSPECTION_CERTIFICATION1 }}
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">出厂日期</div>
              <div class="english-text">{{ cert.DELIVERY_DATE1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line" style="margin-top: -0.2cm">
              <div class="chinese-text">{{ formatDateCN(cert.DELIVERY_DATE) }}</div>
              <div class="english-text">{{ cert.DELIVERY_DATE_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">检验员</div>
              <div class="english-text">{{ cert.INSPECTOR1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">&nbsp;</div>
          </td>
          <td class="label-cell" colspan="5" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text no-wrap">质检机构负责人</div>
              <div class="english-text ">{{ cert.QUALITY_INSPECTION_MANAGER1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="7" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">&nbsp;</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">制造许可证编号</div>
              <div class="english-text">{{ cert.MANUFACTURE_LICENSE_NO1}}</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align" style="margin-top: -0.2cm">{{ cert.MANUFACTURE_LICENSE_NO || '────────' }}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">制造许可证有效期</div>
              <div class="english-text">{{ cert.MANUFACTURE_LICENSE_EXPIRY_DATE1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line" style="margin-top: -0.2cm">
              <template v-if="cert.MANUFACTURE_LICENSE_EXPIRY_DATE">
                <div class="chinese-text">{{ formatDateCN(cert.MANUFACTURE_LICENSE_EXPIRY_DATE) }}</div>
              </template>
              <template v-else>
                <div class="chinese-text">────────</div>
              </template>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">生产单位名称</div>
              <div class="english-text">{{ cert.MANUFACTURER_NAME1 }}</div>
            </div>
          </td>
          <td class="value-cell manufacturer-address-value" colspan="18" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">{{ cert.MANUFACTURER_NAME }}</div>
              <div class="english-text">{{ cert.MANUFACTURER_NAME_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell manufacturer-address-label" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">生产单位地址</div>
              <div class="english-text">{{ cert.MANUFACTURER_ADDRESS1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(2.37)">
            <div class="cell-content multi-line" style="margin-top: -0.2cm">
              <div class="chinese-text">{{ cert.MANUFACTURER_ADDRESS }}</div>
              <div class="english-text">{{ cert.MANUFACTURER_ADDRESS_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="3" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">电话</div>
              <div class="english-text">{{ cert.TEL1}}</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.TEL || '─────' }}</div>
          </td>
            <td class="label-cell" colspan="2" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text no-wrap">传真</div>
              <div class="english-text">{{ cert.FAX1}}</div>
            </div>
          </td>
            <td class="value-cell" colspan="6" :style="getCellStyle(1.58)">
              <div class="cell-content_text-top-align">{{ cert.FAX || '─────' }}</div>
            </td>
          <td class="label-cell" colspan="4" :style="getCellStyle(1.58)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text">邮编</div>
              <div class="english-text">{{ cert.ZIP_CODE1}}</div>
            </div>
          </td>
          <td class="value-cell" colspan="3" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.ZIP_CODE || '─────' }}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="3" :style="getCellStyle(2.37)">
            <div class="cell-content" style="margin-top: -0.2cm">
              <div class="chinese-text" >备注</div>
              <div class="english-text">{{ cert.REMARK1 }}</div>
            </div>
          </td>
          <td class="value-cell" colspan="21" :style="getCellStyle(2.37)">

              <div
                   style=" text-align: left; margin-left: 0.3cm; /* 文本左对齐 */;line-height: 0.79cm; max-height: 2.37cm; overflow: hidden !important; white-space: pre-line; width: 100%;">
                {{ cert.REMARK }}
              </div>

          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue'
import certificateApi from '@/services/certificateApi'

// 日期格式化函数
const formatDateCN = (date) => {
  if (!date) return ''
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 获取当前时间的中文格式
// const getCurrentDateCN = () => {
//   return formatDateCN(new Date())
// }

// 日期转英文格式
const formatDateEN = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 获取当前时间的英文格式
// const getCurrentDateEN = () => {
//   return formatDateEN(new Date())
// }

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
    required: true
  }
});

const certificateData = ref([])

watch(() => props.data, (newData) => {
  if (newData) {
    if (Array.isArray(newData)) {
      certificateData.value = newData;
    } else {
      certificateData.value = [newData];
    }
  }
}, {deep: true, immediate: true})

const getCertificateDetail = async (id,lauge) => {
  const res = await certificateApi.getCertificateDetail(id,lauge)
  if (res) {
    return res.data
  }
  return null
};

const getMultipleCertificateDetails = async (ids,lauge) => {
  certificateData.value = [];
  for (const id of ids) {
    const data = await getCertificateDetail(id,lauge);
    if (data) {
      certificateData.value.push(data);
    }
  }


};

const getCellStyle = (heightCm = 1.58) => {
  // 直接使用厘米单位，同时设置height、minHeight和maxHeight确保行高完全固定
  return {
    height: `${heightCm}cm`,
    minHeight: `${heightCm}cm`,
    maxHeight: `${heightCm}cm`,
    position: 'relative',
    overflow: 'hidden !important'
  }
}

function getURLParameters(url) {
  var params = {};
  var paramString = url.split('?')[1];
  if (paramString) {
    var paramPairs = paramString.split('&');
    paramPairs.forEach(function (pair) {
      var keyValue = pair.split('=');
      var key = decodeURIComponent(keyValue[0]);
      var value = decodeURIComponent(keyValue[1]) || true;
      params[key] = value;
    });
  }
  return params;
}

const printCertificate = async () => {
  window.print();
  await certificateApi.addCertificateDetail(certificateData.value);
  // 提取所有证书ID
  const certificateIds = certificateData.value.map(cert => cert.ID_ || cert.CERTIFICATE_NO);
  if (certificateIds.length > 0) {
    try {
      await certificateApi.updatePrintStatus(certificateIds);
      // 替换当前历史记录，不会留下后退记录
      window.location.replace('about:blank');
    } catch (error) {
      // 打印状态更新失败不影响用户体验，仅记录错误
      console.error('更新打印状态失败:', error);
    }
  }
}

defineExpose({
  printCertificate
})

onMounted(async () => {
  const params = getURLParameters(window.location.href);
  if (params.id) {
    const certificateIds = params.id.split(',').map(id => id.trim());
    const lauge = params.lauge
    await getMultipleCertificateDetails(certificateIds,lauge);
    if (certificateData.value.length > 1) {
      const firstCert = certificateData.value[0];
      const firstNo = firstCert.CERTIFICATE_NO;
      const match = firstNo.match(/(\d{5})$/);
      if (match) {
        let baseNumber = parseInt(match[1], 10);
        for (let i = 1; i < certificateData.value.length; i++) {
          baseNumber += 1;
          const newNumber = baseNumber.toString().padStart(5, '0');
          certificateData.value[i].CERTIFICATE_NO = firstNo.replace(/\d{5}$/, newNumber);
        }
      }
    }
  }
})
</script>

<style scoped>
.print-button {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 5px;
}

.print-button:hover {
  background-color: #45a049;
}

.print-button i {
  font-size: 16px;
}

.certificate-container {
  /* 证书容器 - 占满整个宽度，使用flex布局垂直居中 */
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.certificate-wrapper {
  /* 证书包装容器 - 设置A4纸标准尺寸(21cm×29.7cm)，确保每页打印一个证书 */
  page-break-after: always; /* 强制分页，每个证书单独一页 */
  width: 100%;
  max-width: 21cm; /* A4纸宽度 */
  min-height: 29.7cm; /* A4纸高度 */
  margin-bottom: 3cm;
  box-sizing: border-box;
  position: relative;
}

@media print {
  /* 打印样式 - 调整证书在打印时的尺寸和边距 */
  .certificate-wrapper {
    width: calc(21cm - 40mm) !important; /* 打印时宽度减去左右边距(各20mm) */
    max-width: calc(21cm - 40mm) !important;
    margin: 24.7mm auto 10mm !important; /* 顶部边距24.7mm，底部边距10mm，左右居中 */
    min-height: auto !important; /* 打印时自动适应内容高度 */
    page-break-after: always !important; /* 强制分页 */
  }
}

.certificate-table {
  /* 证书表格 - 设置固定宽度和高度，使用固定布局 */
  width: 17cm; /* 表格宽度 */
  height: 26.3cm; /* 表格总高度 */
  border-collapse: collapse; /* 合并边框 */
  table-layout: fixed; /* 使用固定布局，确保列宽一致 */
}

.certificate-table td {
  /* 证书表格单元格 - 定义所有单元格的基本样式 */
  border: 0.18mm solid #000000; /* 0.18mm宽的黑色边框 */
  background-color: transparent; /* 透明背景 */
  vertical-align: middle; /* 垂直居中对齐 */
  text-align: center; /* 水平居中对齐 */
  padding: 0; /* 清除默认内边距 */
  overflow: hidden !important; /* 隐藏溢出内容，确保不影响行高 */
  font-size: 12pt; /* 字体大小12pt */
  line-height: 1.0; /* 行高1.0 */
  box-sizing: border-box; /* 确保边框和内边距不影响高度 */
}

.label-cell, .value-cell, .inspection-cell {
  /* 单元格类型 - 定义不同类型单元格的字体 */
  font-family: 'SimSun', '宋体', serif; /* 使用宋体字体 */
}

.inspection-cell .chinese-text {
  /* 检验结论单元格中的中文文本 - 设置字体大小、字体和行高 */
  font-size: 12pt; /* 字体大小12pt */
  font-family: 'SimSun', '宋体', serif; /* 使用宋体字体 */
  line-height: 1.0; /* 行高1.0 */
}

.manufacturer-address-label .chinese-text {
  /* 生产单位地址标签中的中文文本 - 设置字体大小和字体 */
  font-size: 12pt; /* 字体大小12pt */
  font-family: 'SimSun', '宋体', serif; /* 使用宋体字体 */
}

.manufacturer-address-value .chinese-text {
  /* 生产单位地址值中的中文文本 - 设置较大字号和居中对齐 */
  font-size: 18pt; /* 字体大小18pt，比普通文本大 */
  font-family: 'SimSun', '宋体', serif; /* 使用宋体字体 */
  justify-content: center; /* flex布局水平居中 */
  align-items: center; /* flex布局垂直居中 */
  text-align: center; /* 文本水平居中 */
}

.manufacturer-address-value .english-text {
  /* 生产单位地址值中的英文文本 - 设置字体、字号和间距 */
  font-family: 'Times New Roman', serif; /* 使用Times New Roman字体 */
  font-size: 12pt; /* 字体大小12pt */
  line-height: 1.0; /* 行高1.0 */
  margin: 0.15cm 0 0 0; /* 顶部外边距0.15cm，与中文文本保持间距 */
  color: #000; /* 黑色文本 */
  text-align: center; /* 文本水平居中 */
}

.cell-content {
  /* 单元格内容 - 定义单元格内部内容的布局 */
  padding: 0.2cm 0.3cm; /* 上下内边距0.2cm，左右内边距0.3cm */
  height: 100%; /* 高度占满整个单元格 */
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 垂直方向排列 */
  justify-content: center; /* 垂直居中对齐 */
  align-items: left; /* 水平左对齐 */
  text-align: left; /* 文本左对齐 */
  overflow: hidden !important; /* 隐藏溢出内容，确保不影响行高 */
  white-space: normal; /* 允许文本换行，但保持在固定高度内 */

}

.cell-content_text-top-align {
  /* 顶部对齐的单元格内容 - 适用于单行文本，设置最小/最大高度 */
  padding: 0cm 0.3cm; /* 上下内边距0.2cm，左右内边距0.3cm */
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 垂直方向排列 */
  justify-content: center; /* 垂直居中对齐 */
  align-items: left; /* 水平左对齐 */
  text-align: left; /* 文本左对齐 */

  min-height: 1.58cm !important; /* 最小高度1.58cm */
  max-height: 1.58cm !important; /* 最大高度1.58cm */
}

.multi-line {
  /* 多行文本 - 定义多行文本内容的布局 */
  padding: 0.2cm 0.3cm; /* 上下内边距0.2cm，左右内边距0.3cm */
  height: 100%; /* 高度占满整个单元格 */
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 垂直方向排列 */
  overflow: hidden !important; /* 隐藏溢出内容，确保不影响行高 */
  justify-content: center; /* 垂直居中对齐 */
  align-items: left; /* 水平左对齐 */
  text-align: left; /* 文本左对齐 */
  white-space: pre-line !important; /* 保留换行符，支持多行显示 */
}

.chinese-text, .chinese-text1, .chinese-text2 {
  /* 中文文本基础样式 - 定义所有中文文本的公共样式 */
  font-family: 'SimSun', '宋体', serif; /* 使用宋体字体 */
  font-size: 12pt; /* 字体大小12pt */
  line-height: 1.0; /* 行高1.0 */
  margin: 0; /* 清除默认外边距 */
  color: #000; /* 黑色文本 */
  text-align: left; /* 文本左对齐 */
  padding: 0; /* 清除默认内边距 */
  white-space: pre-line !important; /* 保留换行符 */
  overflow: hidden; /* 隐藏溢出内容 */
}

.no-wrap {
  /* 文本不换行样式 */
  white-space: nowrap !important;
}

.chinese-text1 {
  /* 中文文本1 - 定义备注等多行文本的样式 */
  line-height: 1.2; /* 行高1.2，提高可读性 */
  overflow: hidden !important; /* 隐藏溢出内容 */
  min-height: 2.37cm !important; /* 最小高度2.37cm */
  max-height: 2.37cm !important; /* 最大高度2.37cm */
}

.fixed-height-multi-line {
  /* 固定高度的多行文本 - 确保无论内容多少都保持固定行高 */
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
  overflow: hidden !important;
  display: block;
  white-space: pre-line !important;
  line-height: 1.0;
}

.fixed-height-multi-line > * {
  /* 固定高度多行文本的子元素样式 - 确保内部元素也不会影响高度 */
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
  overflow: hidden !important;
  display: block;
  line-height: 1.0;
}

.english-text {

  /* 英文文本 - 定义英文文本的基本样式 */
  font-family: 'Times New Roman', serif; /* 使用Times New Roman字体 */
  font-size: 12pt; /* 字体大小12pt */
  line-height: 1.0; /* 行高1.0 */
  margin-top: 0.15cm; /* 与中文文本之间保留0.15cm间距 */
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  color: #000; /* 黑色文本 */
  text-align: left; /* 文本左对齐 */
  padding: 0; /* 清除默认内边距 */
  white-space: pre-line; /* 保留换行符 */
}

@media print {
  .print-button {
    display: none !important;
  }

  @page {
    size: A4 portrait !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .certificate-container {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: block !important;
  }

  body, html {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  .certificate-table {
    width: 17cm !important;
    height: 26.3cm !important;
    margin: 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
  }

  .certificate-table td {
    border: 0.18mm solid #000000 !important;
    background-color: transparent !important;
    vertical-align: middle !important;
    text-align: center !important;
    padding: 0 !important;
    overflow: hidden !important;
    font-size: 12pt !important;
    line-height: 1.0 !important;
  }

  .label-cell, .value-cell, .inspection-cell {
    font-family: 'SimSun', '宋体', serif !important;
  }

  .chinese-text {
    font-family: 'SimSun', '宋体', serif !important;
    font-size: 12pt !important;
    line-height: 1.0 !important;
    margin: 0 !important;
    color: #000 !important;
    text-align: left !important;
    white-space: pre-line !important;
    overflow: hidden !important;
  }

  .no-wrap {
    white-space: nowrap !important;
  }

  .english-text {
    font-family: 'Times New Roman', serif !important;
    font-size: 12pt !important;
    line-height: 1.0 !important;
    margin-top: 0.15cm !important;
    margin-bottom: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    color: #000 !important;
    text-align: left !important;
  }

  .cell-content {
    padding: 0.2cm 0.3cm !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: left !important;
    text-align: left !important;
    overflow: hidden !important;
    white-space: normal !important;
  }

  .cell-content_text-top-align {
    padding: 0cm 0.3cm !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: left !important;
    text-align: left !important;
    min-height: 1.58cm !important;
    max-height: 1.58cm !important;
  }

  .multi-line {
    padding: 0.2cm 0.3cm !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: left !important;
    text-align: left !important;
    overflow: hidden !important;
    white-space: pre-line !important;
  }

  .manufacturer-address-value .chinese-text {
    font-size: 18pt !important;
    text-align: center !important;
  }

  .manufacturer-address-value .english-text {
    text-align: center !important;
  }
}
</style>