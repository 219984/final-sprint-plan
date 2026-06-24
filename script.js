const plan = [
  {
    date: "2026-06-24",
    label: "06.24",
    weekday: "周三",
    focus: "电路前四章 + 高数第九章",
    note: "今天的目标是恢复手感，不在旧内容上陷得太深。",
    groups: [
      { subject: "电路", tasks: ["电压、电流参考方向与 KCL、KVL", "网孔分析与节点分析", "叠加定理", "分解方法、单双口网络"] },
      { subject: "高数", tasks: ["偏导数与全微分", "复合函数求导", "隐函数求导"] },
      { subject: "英语", tasks: ["看第一章课文大意", "圈出重点单词"] }
    ]
  },
  {
    date: "2026-06-25",
    label: "06.25",
    weekday: "周四",
    focus: "电路一阶电路 + 高数第十章",
    note: "一阶电路固定流程：初值 → 稳态值 → 时间常数 → 写表达式。",
    groups: [
      { subject: "电路", tasks: ["电容、电感基本公式", "换路定律", "一阶电路三要素法"] },
      { subject: "高数", tasks: ["二重积分基本计算", "改变积分次序", "极坐标计算"] },
      { subject: "英语", tasks: ["第一章听力听一遍", "看原文并标出关键词"] }
    ]
  },
  {
    date: "2026-06-26",
    label: "06.26",
    weekday: "周五",
    focus: "线代第四章 + 物理振动",
    note: "目标：会算特征值、特征向量，知道什么时候能对角化。",
    groups: [
      { subject: "线代", tasks: ["特征值与特征向量", "特征多项式", "可对角化条件"] },
      { subject: "物理", tasks: ["简谐振动方程", "相位、初相与振动图像", "振动能量"] },
      { subject: "英语", tasks: ["复习第一章课文", "复习第一章听力"] }
    ]
  },
  {
    date: "2026-06-27",
    label: "06.27",
    weekday: "周六",
    focus: "电路交流部分 + 高数重积分",
    note: "相量法是后续功率、三相和频响的地基，今天务必搞顺。",
    groups: [
      { subject: "电路", tasks: ["交流动态电路", "相量法", "阻抗", "R、L、C 的相量关系"] },
      { subject: "高数", tasks: ["三重积分", "柱坐标与球坐标", "重积分应用"] },
      { subject: "复盘", tasks: ["整理当天公式", "归纳当天错题"] }
    ]
  },
  {
    date: "2026-06-28",
    label: "06.28",
    weekday: "周日",
    focus: "高数第十一章 + 电路功率三相",
    note: "第十一章先把曲线积分拿下，不急着一次吞掉全部公式。",
    groups: [
      { subject: "高数", tasks: ["第一类曲线积分", "第二类曲线积分", "格林公式"] },
      { subject: "电路", tasks: ["正弦稳态功率", "有功、无功、视在功率", "功率因数", "三相电路基础"] },
      { subject: "英语", tasks: ["第二章课文大意", "整理单词短语"] }
    ]
  },
  {
    date: "2026-06-29",
    label: "06.29",
    weekday: "周一",
    focus: "线代第五章 + 英语",
    note: "二次型题型相对固定，今天要把标准步骤练熟。",
    groups: [
      { subject: "线代", tasks: ["二次型矩阵", "配方法与标准形", "正定二次型判断"] },
      { subject: "英语", tasks: ["第二章听力听一遍", "看原文", "记录关键词与答案逻辑"] },
      { subject: "复盘", tasks: ["回看电路相量法", "翻一遍重积分公式"] }
    ]
  },
  {
    date: "2026-06-30",
    label: "06.30",
    weekday: "周二",
    focus: "物理波动 + 高数级数入门",
    note: "物理优先练图像和波函数；级数优先练敛散性判断。",
    groups: [
      { subject: "物理", tasks: ["波函数", "波速、波长与频率", "传播方向", "干涉与驻波"] },
      { subject: "高数", tasks: ["数项级数与正项级数", "比值与根值判别法", "交错级数"] },
      { subject: "英语", tasks: ["复习前两章课文单词"] }
    ]
  },
  {
    date: "2026-07-01",
    label: "07.01",
    weekday: "周三",
    focus: "电路频率响应 + 高数第十一章",
    note: "频响题：先写网络函数，再分析幅频特性。今天要打穿第十一章一轮。",
    groups: [
      { subject: "电路", tasks: ["频率响应", "低通、高通、带通", "网络函数", "多频正弦稳态电路"] },
      { subject: "高数", tasks: ["第一类与第二类曲面积分", "高斯公式", "斯托克斯公式"] },
      { subject: "英语", tasks: ["第三章课文大意"] }
    ]
  },
  {
    date: "2026-07-02",
    label: "07.02",
    weekday: "周四",
    focus: "电路互感变压器 + 线代第六章",
    note: "互感方向容易丢分，每道题都把同名端与电压方向明确标出。",
    groups: [
      { subject: "电路", tasks: ["耦合电感", "同名端", "互感电压方向", "理想变压器"] },
      { subject: "线代", tasks: ["基、维数与坐标", "线性变换", "线性变换矩阵"] },
      { subject: "英语", tasks: ["第三章听力"] }
    ]
  },
  {
    date: "2026-07-03",
    label: "07.03",
    weekday: "周五",
    focus: "电路拉普拉斯 + 物理热力学",
    note: "掌握把时域电路变成 s 域电路，再求响应的完整路线。",
    groups: [
      { subject: "电路", tasks: ["拉普拉斯变换", "电容、电感的运算电路", "用拉氏变换解动态电路"] },
      { subject: "物理", tasks: ["热力学第一定律", "四类基本过程", "P-V 图像与循环过程", "热机效率"] },
      { subject: "复盘", tasks: ["练习判断做功、吸热与内能变化"] }
    ]
  },
  {
    date: "2026-07-04",
    label: "07.04",
    weekday: "周六",
    focus: "综合刷题日",
    note: "不再大范围开新内容。按考试题型做综合题，并留下错题原因。",
    groups: [
      { subject: "电路", tasks: ["一阶电路、相量法与功率", "三相、频响与互感", "拉氏变换综合题"] },
      { subject: "高数", tasks: ["多元微分与重积分", "曲线曲面积分", "级数"] },
      { subject: "线代", tasks: ["特征值与特征向量", "二次型与线性空间"] },
      { subject: "物理", tasks: ["整理振动、波动公式", "整理热力学、气体动理论公式"] }
    ]
  },
  {
    date: "2026-07-05",
    label: "07.05",
    weekday: "周日",
    focus: "最后收尾日",
    note: "今天不求强度，只求把错题、公式和固定流程收拢到脑子里。",
    groups: [
      { subject: "复盘", tasks: ["回看电路与高数错题", "回看线代与物理错题"] },
      { subject: "公式", tasks: ["背电路、高数公式", "背物理公式", "复习线代判断条件"] },
      { subject: "英语", tasks: ["过三章单词", "过三章课文大意", "过听力关键词与老师重点"] }
    ]
  }
];

const subjectMeta = {
  "电路": { color: "var(--green)", minimum: "弄懂 1 个大题型", detail: "三要素法、相量法、功率、三相、频响、互感或拉氏变换。" },
  "高数": { color: "var(--orange)", minimum: "完成 3—5 道典型题", detail: "优先换序、极坐标、曲线曲面积分、级数与收敛域。" },
  "线代": { color: "var(--blue)", minimum: "复习 1 个核心模块", detail: "特征值、对角化、二次型、正定判断或线性空间。" },
  "物理": { color: "var(--purple)", minimum: "背 1 组公式 + 做 2 题", detail: "公式必须配题使用，不做只看公式的假复习。" },
  "英语": { color: "var(--yellow)", minimum: "完成 1 个微任务", detail: "一段课文、一段听力或一组单词短语都算推进。" },
  "复盘": { color: "var(--red)" },
  "公式": { color: "var(--red)" }
};

const STORAGE_KEY = "final-sprint-2026";
const THEME_KEY = "final-sprint-theme";

let state = loadState();
let activeFilter = "all";
let toastTimer;

const dayList = document.getElementById("dayList");
const subjectList = document.getElementById("subjectList");
const minimumGrid = document.getElementById("minimumGrid");
const reviewNote = document.getElementById("reviewNote");

function taskId(dayIndex, groupIndex, taskIndex) {
  return `${dayIndex}-${groupIndex}-${taskIndex}`;
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed && typeof parsed === "object"
      ? { checked: parsed.checked || {}, notes: parsed.notes || {} }
      : { checked: {}, notes: {} };
  } catch {
    return { checked: {}, notes: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getTodayString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDisplayDayIndex() {
  const exact = plan.findIndex(day => day.date === getTodayString());
  if (exact >= 0) return exact;

  const today = new Date(`${getTodayString()}T00:00:00`);
  const first = new Date(`${plan[0].date}T00:00:00`);
  const last = new Date(`${plan[plan.length - 1].date}T00:00:00`);
  if (today < first) return 0;
  if (today > last) return plan.length - 1;
  return 0;
}

function renderDays() {
  const today = getTodayString();
  const displayIndex = getDisplayDayIndex();

  dayList.innerHTML = plan.map((day, dayIndex) => {
    const groups = day.groups.filter(group =>
      activeFilter === "all" || group.subject === activeFilter
    );
    if (!groups.length) return "";

    const allTasks = day.groups.flatMap((group, groupIndex) =>
      group.tasks.map((task, taskIndex) => ({ id: taskId(dayIndex, groupIndex, taskIndex), task }))
    );
    const completed = allTasks.filter(item => state.checked[item.id]).length;
    const complete = completed === allTasks.length;
    const isToday = day.date === today;
    const shouldOpen = isToday || (today < plan[0].date && dayIndex === 0) || (today > plan.at(-1).date && dayIndex === displayIndex);

    const groupMarkup = groups.map(group => {
      const originalGroupIndex = day.groups.indexOf(group);
      const groupDone = group.tasks.filter((_, taskIndex) =>
        state.checked[taskId(dayIndex, originalGroupIndex, taskIndex)]
      ).length;
      const meta = subjectMeta[group.subject] || subjectMeta["复盘"];

      return `
        <div class="task-group">
          <div class="task-group-header">
            <span class="task-subject"><i style="background:${meta.color}"></i>${group.subject}</span>
            <small>${groupDone}/${group.tasks.length}</small>
          </div>
          ${group.tasks.map((task, taskIndex) => {
            const id = taskId(dayIndex, originalGroupIndex, taskIndex);
            return `
              <label class="task-item">
                <input type="checkbox" data-task-id="${id}" ${state.checked[id] ? "checked" : ""}>
                <span class="custom-check"></span>
                <span class="task-text">${task}</span>
              </label>
            `;
          }).join("")}
        </div>
      `;
    }).join("");

    return `
      <article class="day-card ${isToday ? "today" : ""} ${complete ? "complete" : ""} ${shouldOpen ? "open" : ""}" id="${isToday ? "today" : `day-${dayIndex}`}">
        <button class="day-summary" type="button" aria-expanded="${shouldOpen}">
          <span class="day-date">
            <strong>${day.label}</strong>
            <span>${day.weekday}</span>
          </span>
          <span class="day-title">
            ${isToday ? '<span class="today-badge">TODAY · 今日</span>' : ""}
            <strong>${day.focus}</strong>
            <span>${complete ? "本日任务已全部完成" : day.note}</span>
          </span>
          <span class="day-progress"><strong>${completed}</strong> / ${allTasks.length}<br>已完成</span>
          <span class="day-toggle">＋</span>
        </button>
        <div class="day-body">
          <div class="task-groups">
            ${groupMarkup}
            <div class="task-note"><strong>今日提醒：</strong>${day.note}</div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  bindDayEvents();
}

function bindDayEvents() {
  document.querySelectorAll(".day-summary").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".day-card");
      card.classList.toggle("open");
      button.setAttribute("aria-expanded", card.classList.contains("open"));
    });
  });

  document.querySelectorAll("[data-task-id]").forEach(input => {
    input.addEventListener("change", event => {
      const id = event.currentTarget.dataset.taskId;
      state.checked[id] = event.currentTarget.checked;
      saveState();
      renderAll();
    });
  });
}

function getStats() {
  const taskEntries = [];
  const subjectEntries = {};

  plan.forEach((day, dayIndex) => {
    day.groups.forEach((group, groupIndex) => {
      group.tasks.forEach((_, taskIndex) => {
        const id = taskId(dayIndex, groupIndex, taskIndex);
        const checked = Boolean(state.checked[id]);
        taskEntries.push({ id, checked, subject: group.subject });
        if (subjectMeta[group.subject]?.minimum) {
          subjectEntries[group.subject] ||= [];
          subjectEntries[group.subject].push(checked);
        }
      });
    });
  });

  const dayCompletion = plan.map((day, dayIndex) => {
    const ids = day.groups.flatMap((group, groupIndex) =>
      group.tasks.map((_, taskIndex) => taskId(dayIndex, groupIndex, taskIndex))
    );
    return ids.every(id => state.checked[id]);
  });

  let streak = 0;
  for (const complete of dayCompletion) {
    if (!complete) break;
    streak += 1;
  }

  return {
    total: taskEntries.length,
    completed: taskEntries.filter(item => item.checked).length,
    completedDays: dayCompletion.filter(Boolean).length,
    streak,
    subjectEntries
  };
}

function renderStats() {
  const stats = getStats();
  const percent = stats.total ? Math.round(stats.completed / stats.total * 100) : 0;
  const circumference = 2 * Math.PI * 94;

  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressCircle").style.strokeDashoffset =
    circumference - (circumference * percent / 100);
  document.getElementById("completedTasks").textContent = stats.completed;
  document.getElementById("totalTasks").textContent = ` / ${stats.total}`;
  document.getElementById("completedDays").textContent = stats.completedDays;
  document.getElementById("streakText").textContent = `连续 ${stats.streak} 天完整完成`;

  const today = getTodayString();
  let phase = "冲刺开始";
  if (today > plan.at(-1).date) phase = "冲刺结束";
  else if (today >= plan[0].date) phase = `冲刺第 ${getDisplayDayIndex() + 1} 天`;
  document.getElementById("phaseText").textContent = phase;

  subjectList.innerHTML = Object.entries(subjectMeta)
    .filter(([, meta]) => meta.minimum)
    .map(([subject, meta]) => {
      const values = stats.subjectEntries[subject] || [];
      const done = values.filter(Boolean).length;
      const subjectPercent = values.length ? Math.round(done / values.length * 100) : 0;
      return `
        <div class="subject-row">
          <div class="subject-row-top">
            <span class="subject-name"><i class="subject-dot" style="background:${meta.color}"></i>${subject}</span>
            <span class="subject-count">${done}/${values.length}</span>
          </div>
          <div class="subject-progress"><span style="width:${subjectPercent}%;background:${meta.color}"></span></div>
        </div>
      `;
    }).join("");
}

function renderMinimums() {
  minimumGrid.innerHTML = Object.entries(subjectMeta)
    .filter(([, meta]) => meta.minimum)
    .map(([subject, meta], index) => `
      <article class="minimum-card">
        <span class="minimum-index" style="background:${meta.color}">0${index + 1}</span>
        <h3>${subject}</h3>
        <p>${meta.detail}</p>
        <strong>${meta.minimum}</strong>
      </article>
    `).join("");
}

function renderReviewNote() {
  const currentDate = getTodayString();
  reviewNote.value = state.notes[currentDate] || "";
}

function renderAll() {
  renderDays();
  renderStats();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("filterRow").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach(item =>
    item.classList.toggle("active", item === button)
  );
  renderDays();
});

document.getElementById("saveNoteButton").addEventListener("click", () => {
  state.notes[getTodayString()] = reviewNote.value.trim();
  saveState();
  document.getElementById("saveStatus").textContent = `已保存于 ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
  showToast("今日复盘已保存");
});

let autoSaveTimer;
reviewNote.addEventListener("input", () => {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    state.notes[getTodayString()] = reviewNote.value;
    saveState();
    document.getElementById("saveStatus").textContent = "已自动保存";
  }, 600);
});

document.getElementById("resetButton").addEventListener("click", () => {
  if (!window.confirm("确定清空所有打卡和复盘记录吗？此操作无法撤销。")) return;
  state = { checked: {}, notes: {} };
  saveState();
  renderAll();
  renderReviewNote();
  showToast("全部记录已重置");
});

function exportData() {
  const data = {
    exportedAt: new Date().toISOString(),
    plan: "2026-06-24_to_2026-07-05",
    progress: state
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `期末冲刺打卡-${getTodayString()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("打卡数据已导出");
}

document.getElementById("exportButton").addEventListener("click", exportData);
document.getElementById("backupExportButton").addEventListener("click", exportData);

const backupFileInput = document.getElementById("backupFileInput");
document.getElementById("backupImportButton").addEventListener("click", () => backupFileInput.click());

backupFileInput.addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const imported = JSON.parse(await file.text());
    const progress = imported.progress || imported;
    if (!progress || typeof progress.checked !== "object") {
      throw new Error("Invalid backup");
    }

    state = {
      checked: progress.checked || {},
      notes: progress.notes || {}
    };
    saveState();
    renderReviewNote();
    renderAll();
    showToast("打卡记录已恢复");
  } catch {
    showToast("无法识别这份备份文件");
  } finally {
    backupFileInput.value = "";
  }
});

const themeButton = document.getElementById("themeButton");
const storedTheme = localStorage.getItem(THEME_KEY);
if (storedTheme === "dark") {
  document.body.classList.add("dark");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, document.body.classList.contains("dark") ? "dark" : "light");
});

renderMinimums();
renderReviewNote();
renderAll();
