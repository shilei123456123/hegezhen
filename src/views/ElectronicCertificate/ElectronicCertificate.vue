<template>
  <div class="certificate-container">
    <button class="pdf-button" @click="downloadPDF">
      <i class="fas fa-file-pdf"></i> 下载PDF
    </button>

    <div class="certificate-wrapper">
      <div class="image-page">
        <img src="/xcmg.png" alt="Certificate Image" class="certificate-image" />
      </div>
    </div>

    <div class="certificate-wrapper">
      <table class="certificate-table" v-if="certificateData" style="margin-left: 2cm">
        <tbody>
        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">合格证编号</div>
              <div class="english-text">Certificate No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="english-text">{{ cert.CERTIFICATE_NO }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">产品名称</div>
              <div class="english-text">Product Name</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line">
              <div class="chinese-text">{{ cert.PRODUCT_NAME }}</div>
              <div class="english-text">{{ cert.PRODUCT_NAME_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">产品型号</div>
              <div class="english-text">Product Model</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="english-text">{{ cert.PRODUCT_MODEL }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">产品识别代码</div>
              <div class="english-text">PIN/VIN</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="english-text">{{ cert.PIN }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">发动机编号&nbsp;&nbsp;&nbsp;</div>
              <div class="english-text">Engine No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="chinese-text2" style="margin-left: 0.3cm; line-height: 0.79cm; max-height: 1.58cm; overflow: hidden; white-space: pre-line; width: 100%;">{{ cert.ENGINE_NO}}</div>
          </td>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">底盘编号</div>
              <div class="english-text">Chassis No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="chinese-text2" style="margin-left: 0.3cm; line-height: 0.79cm; max-height: 1.58cm; overflow: hidden; white-space: pre-line; width: 100%;">{{ cert.CHASSIS_NO}}</div>
          </td>
        </tr>

        <tr>
          <td class="inspection-cell" colspan="24" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">
                经检验，本产品符合 {{ cert.INSPECTION_CERTIFICATION }} 规定，确认合格，准予出厂。
              </div>
              <div class="english-text">
                <div>This is to certify the product has undergone inspection and has been found to conform to</div>
                <div>{{ cert.INSPECTION_CERTIFICATION }} standard, as such it has been granted factory dispatch
                  approval.
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">出厂日期</div>
              <div class="english-text">Delivery Date</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line">
              <div class="chinese-text">{{ formatDateCN(cert.DELIVERY_DATE) }}</div>
              <div class="english-text">{{ cert.DELIVERY_DATE_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">检验员</div>
              <div class="english-text">Inspector</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">&nbsp;</div>
          </td>
          <td class="label-cell" colspan="7" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">质检机构负责人</div>
              <div class="english-text">Quality Inspection</div>
              <div class="english-text">Manager</div>
            </div>
          </td>
          <td class="value-cell" colspan="5" :style="getCellStyle(2.37)">
            <div class="cell-content">&nbsp;</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">制造许可证编号</div>
              <div class="english-text">Manufacture License No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.MANUFACTURE_LICENSE_NO || '────────' }}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">制造许可证有效期</div>
              <div class="english-text">Manufacture License Expiry Date</div>
            </div>
          </td>
          <td class="value-cell" colspan="12" :style="getCellStyle(1.58)">
            <div class="cell-content multi-line">
              <template v-if="cert.MANUFACTURE_LICENSE_EXPIRY_DATE">
                <div class="chinese-text">{{ formatDateCN(cert.MANUFACTURE_LICENSE_EXPIRY_DATE) }}</div>
                <div class="english-text">{{ formatDateEN(cert.MANUFACTURE_LICENSE_EXPIRY_DATE) }}</div>
              </template>
              <template v-else>
                <div class="chinese-text">────────</div>
              </template>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">生产单位名称</div>
              <div class="english-text">Manufacturer</div>
              <div class="english-text">Name</div>
            </div>
          </td>
          <td class="value-cell manufacturer-address-value" colspan="18" :style="getCellStyle(2.37)">
            <div class="cell-content multi-line">
              <div class="chinese-text">{{ cert.MANUFACTURER_NAME }}</div>
              <div class="english-text">{{ cert.MANUFACTURER_NAME_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell manufacturer-address-label" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">生产单位地址</div>
              <div class="english-text">Manufacturer</div>
              <div class="english-text">Address</div>
            </div>
          </td>
          <td class="value-cell" colspan="18" :style="getCellStyle(2.37)">
            <div class="cell-content multi-line">
              <div class="chinese-text">{{ cert.MANUFACTURER_ADDRESS }}</div>
              <div class="english-text">{{ cert.MANUFACTURER_ADDRESS_U }}</div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="3" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">电话</div>
              <div class="english-text">Tel</div>
            </div>
          </td>
          <td class="value-cell" colspan="5" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.TEL || '─────' }}</div>
          </td>
          <td class="label-cell" colspan="3" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">传真</div>
              <div class="english-text">Fax</div>
            </div>
          </td>
          <td class="value-cell" colspan="5" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.FAX || '─────' }}</div>
          </td>
          <td class="label-cell" colspan="4" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">邮编</div>
              <div class="english-text">Zip Code</div>
            </div>
          </td>
          <td class="value-cell" colspan="4" :style="getCellStyle(1.58)">
            <div class="cell-content_text-top-align">{{ cert.ZIP_CODE || '─────' }}</div>
          </td>
        </tr>

        <tr>
          <td class="label-cell" colspan="3" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">备注</div>
              <div class="english-text">Remark</div>
            </div>
          </td>
          <td class="value-cell" colspan="21" :style="getCellStyle(2.37)">
            <div style="text-align: left; margin-left: 0.3cm; line-height: 0.79cm; max-height: 2.37cm; overflow: hidden; white-space: pre-line; width: 100%;">
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
import { ref, onMounted, watch, computed } from 'vue'
import { certificateApi } from '../../services/certificateApi'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const formatDateCN = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

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

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
    required: true
  }
});

const certificateData = ref({})
const cert = computed(() => certificateData.value)

watch(() => props.data, (newData) => {
  if (newData) {
    certificateData.value = newData;
  }
}, { deep: true, immediate: true })

const getCertificateDetail = async (id) => {
  const res = await certificateApi.getCertificateDetail(id)
  return res ? res.data : null
};

const getCellStyle = (heightCm = 1.58) => {
  return {
    height: `${heightCm}cm`,
    minHeight: `${heightCm}cm`,
    maxHeight: `${heightCm}cm`
  }
}

const getURLParameters = (url) => {
  const params = {}
  const paramString = url.split('?')[1]
  if (paramString) {
    paramString.split('&').forEach(pair => {
      const [key, value] = pair.split('=')
      params[decodeURIComponent(key)] = decodeURIComponent(value) || true
    })
  }
  return params
}

const downloadPDF = async () => {
  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'cm',
      format: 'a4'
    })
    
    const certificateWrappers = document.querySelectorAll('.certificate-wrapper')
    
    for (let i = 0; i < certificateWrappers.length; i++) {
      const wrapper = certificateWrappers[i]
      const canvas = await html2canvas(wrapper, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      })
      
      const imgData = canvas.toDataURL('image/jpeg', 0.98)
      const imgWidth = 21
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      
      if (i > 0) pdf.addPage()
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight)
    }
    
    pdf.save('电子合格证.pdf')
  } catch (error) {
    console.error('PDF下载失败:', error)
    alert('PDF下载失败，请重试：' + error.message)
  }
}

onMounted(async () => {
  const params = getURLParameters(window.location.href)

  if (params.id) {
    const certificateId = params.id.trim()
    const data = await getCertificateDetail(certificateId)
    if (data) certificateData.value = data
  } else if (props.data) {
    if (props.data.ID_) {
      const data = await getCertificateDetail(props.data.ID_)
      if (data) certificateData.value = data
    } else {
      certificateData.value = props.data
    }
  }
})
</script>

<style scoped>


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
  width: 100%;
  max-width: 21cm;
  min-height: 29.7cm;
  margin-bottom: 1cm;
  box-sizing: border-box;
  position: relative;
}

.image-page {
  width: 100%;
  height: 100%;
  min-height: 29.7cm;
  display: flex;
  align-items: center;
  justify-content: center;
}

.certificate-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media print {
  .certificate-wrapper {
    width: calc(21cm - 40mm) !important;
    max-width: calc(21cm - 40mm) !important;
    margin: 24.7mm auto 10mm !important;
    min-height: auto !important;
  }
}

.certificate-table {
  width: 17cm;
  height: 26.3cm;
  border-collapse: collapse;
  table-layout: fixed;
}

.certificate-table td {
  border: 0.18mm solid #000000;
  background-color: transparent;
  vertical-align: middle;
  text-align: center;
  padding: 0;
  overflow: hidden;
  font-size: 12pt;
  line-height: 1.0;
  box-sizing: border-box;
}

.label-cell, .value-cell, .inspection-cell {
  font-family: 'SimSun', '宋体', serif;
}

.inspection-cell .chinese-text {
  font-size: 12pt;
  font-family: 'SimSun', '宋体', serif;
  line-height: 1.0;
}

.manufacturer-address-label .chinese-text {
  font-size: 12pt;
  font-family: 'SimSun', '宋体', serif;
}

.manufacturer-address-value .chinese-text {
  font-size: 18pt;
  font-family: 'SimSun', '宋体', serif;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.manufacturer-address-value .english-text {
  font-family: 'Times New Roman', serif;
  font-size: 12pt;
  line-height: 1.0;
  margin: 0.15cm 0 0 0;
  color: #000;
  text-align: center;
}

.cell-content {
  padding: 0.2cm 0.3cm;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  overflow: hidden;
  white-space: normal;
}
.cell-content_text-top-align {
  padding: 0cm 0.3cm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  min-height: 1.58cm;
  max-height: 1.58cm;
}


.multi-line {
  padding: 0.2cm 0.3cm;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: left;
  text-align: left;
  white-space: pre-line;
}

.chinese-text, .chinese-text1, .chinese-text2 {
  font-family: 'SimSun', '宋体', serif;
  font-size: 12pt;
  line-height: 1.0;
  margin: 0;
  color: #000;
  text-align: left;
  padding: 0;
  white-space: pre-line;
  overflow: hidden;
}

.chinese-text1 {
  line-height: 1.2;
  overflow: hidden;
  min-height: 2.37cm;
  max-height: 2.37cm;
}


.english-text {
  font-family: 'Times New Roman', serif;
  font-size: 12pt;
  line-height: 1.0;
  margin: 0;
  color: #000;
  text-align: left;
  padding: 0;
  white-space: pre-line;
}

.pdf-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  padding: 8px 16px;
  background-color: #f0ad4e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-family: 'SimSun', '宋体', serif;
  display: flex;
  align-items: center;
  gap: 5px;
}

.pdf-button:hover {
  background-color: #ec971f;
}

.pdf-button i {
  font-size: 16px;
}

@media print {
  .pdf-button {
    display: none !important;
  }

  /* 打印页面设置 - 定义A4纸张方向和边距 */
  @page {
    size: A4 portrait !important; /* 设置A4纸张，纵向打印 */
    margin: 0 !important; /* 清除默认页边距 */
  }

  /* 打印时证书容器样式 - 调整容器布局 */
  .certificate-container {
    margin: 0 !important; /* 清除外边距 */
    padding: 0 !important; /* 清除内边距 */
    width: 100% !important; /* 宽度100% */
    height: 100% !important; /* 高度100% */
    display: block !important; /* 改为块级显示 */
  }

  /* 打印时页面基础样式 - 设置body和html的边距和尺寸 */
  body, html {
    margin: 0 !important; /* 清除外边距 */
    padding: 0 !important; /* 清除内边距 */
    width: 100% !important; /* 宽度100% */
    height: 100% !important; /* 高度100% */
  }

  /* 打印时证书表格样式 - 调整表格尺寸和边距 */
  .certificate-table {
    width: 100% !important; /* 宽度100% */
    height: calc(297mm - 24.7mm - 10mm) !important; /* 高度计算：A4高度(297mm)减去顶部边距(24.7mm)和底部边距(10mm) */
    margin: -0.5cm 0 0 0 !important; /* 顶部负外边距调整位置 */
    border-collapse: collapse !important; /* 边框合并 */
    table-layout: fixed !important; /* 固定列宽布局 */
  }

  /* 打印时证书表格单元格样式 - 调整单元格样式 */
  .certificate-table td {
    border: 0.18mm solid #000000 !important; /* 边框0.18mm，黑色 */
    background-color: transparent !important; /* 背景透明 */
    vertical-align: middle !important; /* 垂直居中对齐 */
    text-align: center !important; /* 文本居中对齐 */
    padding: 0 !important; /* 清除内边距 */
    overflow: hidden !important; /* 隐藏溢出内容 */
    font-size: 12pt !important; /* 字体大小12pt */
    line-height: 1.0 !important; /* 行高1.0 */
  }

  /* 打印时单元格类型样式 - 定义不同类型单元格的字体 */
  .label-cell, .value-cell, .inspection-cell {
    font-family: 'SimSun', '宋体', serif !important; /* 使用宋体字体 */
  }

  /* 打印时中文文本样式 - 调整中文文本样式 */
  .chinese-text {
    font-family: 'SimSun', '宋体', serif !important; /* 使用宋体字体 */
    font-size: 12pt !important; /* 字体大小12pt */
    line-height: 1.0 !important; /* 行高1.0 */
    margin: 0 !important; /* 清除外边距 */
    color: #000 !important; /* 黑色文本 */
    text-align: left !important; /* 文本左对齐 */
  }

  /* 打印时英文文本样式 - 调整英文文本样式 */
  .english-text {
    font-family: 'Times New Roman', serif !important; /* 使用Times New Roman字体 */
    font-size: 12pt !important; /* 字体大小12pt */
    line-height: 1.0 !important;
    margin: 0.15cm 0 0 0 !important;
    color: #000 !important;
    text-align: left !important;
    line-height: 1.0 !important; /* 行高1.0 */
    margin: 0.15cm 0 0 0 !important; /* 顶部外边距0.15cm，其他方向0 */
    color: #000 !important; /* 黑色文本 */
    text-align: left !important; /* 文本左对齐 */
  }

  /* 打印时生产单位地址值的中文文本样式 - 调整地址中文文本样式 */
  .manufacturer-address-value .chinese-text {
    font-size: 18pt !important; /* 字体大小18pt，比普通文本大 */
    text-align: center !important; /* 文本居中对齐 */
  }

  .manufacturer-address-value .english-text {
    text-align: center !important;
  }
}
</style>