<template>
  <div class="certificate-container">
    <button class="pdf-button" @click="downloadPDF">
      <i class="fas fa-file-pdf"></i> 下载PDF
    </button>

    <!-- 第一页：图片 -->
    <div class="certificate-wrapper">
      <div class="image-page">
        <img src="/xcmg.png" alt="Certificate Image" class="certificate-image" />
      </div>
    </div>

    <!-- 第二页：表格 -->
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

            <div class="chinese-text2" style="margin-left: 0.3cm; /* 文本左对齐 */line-height: 0.79cm; max-height: 1.58cm; overflow: hidden !important; white-space: pre-line; width: 100%;">{{ cert.ENGINE_NO}}</div>

          </td>
          <td class="label-cell" colspan="6" :style="getCellStyle(1.58)">
            <div class="cell-content">
              <div class="chinese-text">底盘编号</div>
              <div class="english-text">Chassis No.</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(1.58)">

            <div class="chinese-text2" style="margin-left: 0.3cm; /* 文本左对齐 */line-height: 0.79cm; max-height: 1.58cm; overflow: hidden !important; white-space: pre-line; width: 100%;">{{ cert.CHASSIS_NO}}</div>

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
              <div class="english-text">Inspector</div>d's'd'd'd'd'd'd'd'd'd'd'd'd'd'd'd'd'd'd
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">&nbsp;</div>
          </td>
          <td class="label-cell" colspan="6" :style="getCellStyle(2.37)">
            <div class="cell-content">
              <div class="chinese-text">质检机构负责人</div>
              <div class="english-text">Quality Inspection</div>
              <div class="english-text">Manager</div>
            </div>
          </td>
          <td class="value-cell" colspan="6" :style="getCellStyle(2.37)">
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
import { ref, onMounted, watch, computed } from 'vue'
import certificateApi from '@/services/certificateApi'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

// 日期格式化函数
const formatDateCN = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
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

const certificateData = ref({})
const cert = computed(() => certificateData.value)

watch(() => props.data, (newData) => {
  if (newData) {
    certificateData.value = newData;
  }
}, { deep: true, immediate: true })

const getCertificateDetail = async (id) => {
  const res = await certificateApi.getCertificateDetail(id)
  if (res) {
    return res.data
  }
  return null
};



const getCellStyle = (heightCm = 1.58) => {
  // 直接使用厘米单位，同时设置height、minHeight和maxHeight确保行高完全固定
  return {
    height: `${heightCm}cm`,
    minHeight: `${heightCm}cm`,
    maxHeight: `${heightCm}cm`
  }
}

function getURLParameters(url) {
  var params = {};
  var paramString = url.split('?')[1];
  if (paramString) {
    var paramPairs = paramString.split('&');
    paramPairs.forEach(function(pair) {
      var keyValue = pair.split('=');
      var key = decodeURIComponent(keyValue[0]);
      var value = decodeURIComponent(keyValue[1]) || true;
      params[key] = value;
    });
  }
  return params;
}

const downloadPDF = async () => {
  try {
    // 创建PDF文档实例
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'cm',
      format: 'a4'
    });
    
    // 获取所有证书包装器
    const certificateWrappers = document.querySelectorAll('.certificate-wrapper');
    
    // 为每个包装器生成PDF页面
    for (let i = 0; i < certificateWrappers.length; i++) {
      const wrapper = certificateWrappers[i];
      
      // 创建canvas
      const canvas = await html2canvas(wrapper, {
        scale: 2, // 提高分辨率
        useCORS: true, // 允许加载跨域图片
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      // 将canvas转换为图片数据
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      
      // 计算图片在PDF中的尺寸和位置
      const imgWidth = 21; // A4宽度，单位cm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // 如果不是第一页，添加新页面
      if (i > 0) {
        pdf.addPage();
      }
      
      // 添加图片到PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    }
    
    // 保存PDF文件
    pdf.save('电子合格证.pdf');
  } catch (error) {
    console.error('PDF下载失败:', error);
    alert('PDF下载失败，请重试：' + error.message);
  }
}



onMounted(async () => {
  const params = getURLParameters(window.location.href);

  if (params.id) {
    const certificateId = params.id.trim();
    const data = await getCertificateDetail(certificateId);
    if (data) {
      certificateData.value = data;
    }
  } else if (props.data) {
    if (props.data.ID_) {
      const data = await getCertificateDetail(props.data.ID_);
      if (data) {
        certificateData.value = data;
      }
    } else {
      certificateData.value = props.data;
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
  /* 证书包装容器 - 设置A4纸标准尺寸(21cm×29.7cm)，确保每页打印一个证书 */
  width: 100%; /* 宽度100% */
  max-width: 21cm; /* A4纸宽度 */
  min-height: 29.7cm; /* A4纸高度 */
  margin-bottom: 1cm; /* 底部外边距1cm */
  box-sizing: border-box; /* 盒模型设置为border-box */
  position: relative; /* 相对定位 */
}

.image-page {
  /* 图片页面 - 定义图片页面的布局 */
  width: 100%; /* 宽度100% */
  height: 100%; /* 高度100% */
  min-height: 29.7cm; /* 最小高度29.7cm（A4纸高度） */
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中对齐 */
  justify-content: center; /* 水平居中对齐 */
}

.certificate-image {
  /* 证书图片 - 定义证书图片的样式 */
  max-width: 100%; /* 最大宽度100% */
  max-height: 100%; /* 最大高度100% */
  object-fit: contain; /* 保持图片比例，完全显示在容器内 */
}

@media print {
  /* 打印样式 - 调整证书在打印时的尺寸和边距 */
  .certificate-wrapper {
    width: calc(21cm - 40mm) !important; /* 打印时宽度减去左右边距(各20mm) */
    max-width: calc(21cm - 40mm) !important; /* 最大宽度限制 */
    margin: 24.7mm auto 10mm !important; /* 顶部边距24.7mm，底部边距10mm，左右居中 */
    min-height: auto !important; /* 打印时自动适应内容高度 */
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
  border: 0.18mm solid #000000; /* 边框0.18mm，黑色 */
  background-color: transparent; /* 背景透明 */
  vertical-align: middle; /* 垂直居中对齐 */
  text-align: center; /* 文本居中对齐 */
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
  /* 检验单元格中的中文文本 - 定义检验单元格中文本的样式 */
  font-size: 12pt; /* 字体大小12pt */
  font-family: 'SimSun', '宋体', serif; /* 使用宋体字体 */
  line-height: 1.0; /* 行高1.0 */
}

.manufacturer-address-label .chinese-text {
  /* 生产单位地址标签的中文文本 - 定义地址标签文本样式 */
  font-size: 12pt; /* 字体大小12pt */
  font-family: 'SimSun', '宋体', serif; /* 使用宋体字体 */
}

.manufacturer-address-value .chinese-text {
  /* 生产单位地址值的中文文本 - 定义地址值文本样式 */
  font-size: 18pt; /* 字体大小18pt，比普通文本大 */
  font-family: 'SimSun', '宋体', serif; /* 使用宋体字体 */
  justify-content: center; /* 垂直居中对齐 */
  align-items: center; /* 水平居中对齐 */
  text-align: center; /* 文本居中对齐 */
}

.manufacturer-address-value .english-text {
  /* 生产单位地址值的英文文本 - 定义地址值英文文本样式 */
  font-family: 'Times New Roman', serif; /* 使用Times New Roman字体 */
  font-size: 12pt; /* 字体大小12pt */
  line-height: 1.0; /* 行高1.0 */
  margin: 0.15cm 0 0 0; /* 顶部外边距0.15cm，其他方向0 */
  color: #000; /* 黑色文本 */
  text-align: center; /* 文本居中对齐 */
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

.chinese-text1 {
  /* 中文文本1 - 定义备注等多行文本的样式 */
  line-height: 1.2; /* 行高1.2，提高可读性 */
  overflow: hidden !important; /* 隐藏溢出内容 */
  min-height: 2.37cm !important; /* 最小高度2.37cm */
  max-height: 2.37cm !important; /* 最大高度2.37cm */
}


.english-text {
  /* 英文文本 - 定义英文文本的基本样式 */
  font-family: 'Times New Roman', serif; /* 使用Times New Roman字体 */
  font-size: 12pt; /* 字体大小12pt */
  line-height: 1.0; /* 行高1.0 */
  margin: 0; /* 清除默认外边距 */
  color: #000; /* 黑色文本 */
  text-align: left; /* 文本左对齐 */
  padding: 0; /* 清除默认内边距 */
  white-space: pre-line; /* 保留换行符 */
}

.pdf-button {
  /* PDF下载按钮样式 */
  position: fixed; /* 固定定位，不随页面滚动 */
  top: 20px; /* 距离顶部20px */
  right: 20px; /* 距离右侧20px */
  z-index: 1000; /* 确保按钮显示在最上层 */
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
  /* PDF下载按钮悬停样式 */
  background-color: #ec971f;
}

.pdf-button i {
  font-size: 16px;
}

@media print {
  /* 打印样式 - 隐藏PDF按钮 */
  .pdf-button {
    display: none !important; /* 打印时隐藏PDF按钮 */
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