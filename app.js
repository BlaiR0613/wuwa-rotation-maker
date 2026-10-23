const characters = [
  // {id:"", name:"", element:"", icon:"images/characters/.png", fallback:""},
  {id:"suoming", name:"鎖暝", element:"electro", icon:"images/characters/suoming.png", fallback:""},
  {id:"hsin", name:"心", element:"electro", icon:"images/characters/hsin.png", fallback:""},
  {id:"jingran", name:"景燃", element:"fusion", icon:"images/characters/jingran.png", fallback:""},
  {id:"qingxiao", name:"清宵", element:"aero", icon:"images/characters/qingxiao.png", fallback:""},
  {id:"suisui", name:"穂穂", element:"glacio", icon:"images/characters/suisui.png", fallback:""},
  {id:"yangyang_xuanling", name:"秧秧・玄翎", element:"havoc", icon:"images/characters/yangyang xuanling.png", fallback:""},
  {id:"rover_electro", name:"漂泊者(電導)", element:"electro", icon:"images/characters/rover_electro.png", fallback:""},
  {id:"lucilla", name:"ルシラー", element:"glacio", icon:"images/characters/lucilla.png", fallback:""},
  {id:"lucy", name:"ルーシー", element:"spectro", icon:"images/characters/lucy.png", fallback:""},
  {id:"rebecca", name:"レベッカ", element:"electro", icon:"images/characters/rebecca.png", fallback:""},
  {id:"denia", name:"ダーニャ", element:"fusion", icon:"images/characters/denia.png", fallback:""},
  {id:"hiyuki", name:"緋雪", element:"glacio", icon:"images/characters/hiyuki.png", fallback:""},
  {id:"sigrika", name:"シグリカ", element:"aero", icon:"images/characters/sigrika.png", fallback:""},
  {id:"luuk herssen", name:"リューク・ヘルセン", element:"spectro", icon:"images/characters/luuk herssen.png", fallback:""},
  {id:"mech scout", name:"メカスカウト", element:"fusion", icon:"images/characters/mech scout.png", fallback:""},
  {id:"aemeath", name:"エイメス", element:"fusion", icon:"images/characters/aemeath.png", fallback:""},
  {id:"mornye", name:"モーニエ", element:"fusion", icon:"images/characters/mornye.png", fallback:""},
  {id:"lynae", name:"リンネー", element:"spectro", icon:"images/characters/lynae.png", fallback:""},
  {id:"chisa", name:"千咲", element:"havoc", icon:"images/characters/chisa.png", fallback:""},
  {id:"qiuyuan", name:"仇遠", element:"aero", icon:"images/characters/qiuyuan.png", fallback:""},
  {id:"galbrena", name:"ガルブレーナ", element:"fusion", icon:"images/characters/galbrena.png", fallback:""},
  {id:"iuno", name:"ユーノ", element:"aero", icon:"images/characters/iuno.png", fallback:""},
  {id:"augusta", name:"オーガスタ", element:"electro", icon:"images/characters/augusta.png", fallback:""},
  {id:"phrolova", name:"フローヴァ", element:"havoc", icon:"images/characters/phrolova.png", fallback:""},
  {id:"lupa", name:"ルパ", element:"fusion", icon:"images/characters/lupa.png", fallback:""},
  {id:"fleurdelys", name:"フルールドリス", element:"aero", icon:"images/characters/fleurdelys.png", fallback:""},
  {id:"cartethyia", name:"カルテジア", element:"aero", icon:"images/characters/cartethyia.png", fallback:""},
  {id:"ciaccona", name:"シャコンヌ", element:"aero", icon:"images/characters/ciaccona.png", fallback:""},
  {id:"rover_aero", name:"漂泊者(気動)", element:"aero", icon:"images/characters/rover_aero.png", fallback:""},
  {id:"zani", name:"ザンニー", element:"spectro", icon:"images/characters/zani.png", fallback:""},
  {id:"cantarella", name:"カンタレラ", element:"havoc", icon:"images/characters/cantarella.png", fallback:""},
  {id:"brant", name:"ブラント", element:"fusion", icon:"images/characters/brant.png", fallback:""},
  {id:"phoebe", name:"フィービー", element:"spectro", icon:"images/characters/phoebe.png", fallback:""},
  {id:"roccia", name:"ロココ", element:"havoc", icon:"images/characters/roccia.png", fallback:""},
  {id:"carlotta", name:"カルロッタ", element:"glacio", icon:"images/characters/carlotta.png", fallback:""},
  {id:"camellya", name:"ツバキ", element:"havoc", icon:"images/characters/camellya.png", fallback:""},
  {id:"shorekeeper", name:"ショアキーパー", element:"spectro", icon:"images/characters/shorekeeper.png", fallback:""},
  {id:"xiangli yao", name:"相里要", element:"electro", icon:"images/characters/xiangli yao.png", fallback:""},
  {id:"zhezhi", name:"折枝", element:"glacio", icon:"images/characters/zhezhi.png", fallback:""},
  {id:"changli", name:"長離", element:"fusion", icon:"images/characters/changli.png", fallback:""},
  {id:"jinhsi", name:"今汐", element:"spectro", icon:"images/characters/jinhsi.png", fallback:""},
  {id:"yinlin", name:"吟霖", element:"electro", icon:"images/characters/yinlin.png", fallback:""},
  {id:"jiyan", name:"忌炎", element:"aero", icon:"images/characters/jiyan.png", fallback:""},
  {id:"rover_havoc", name:"漂泊者(消滅)", element:"havoc", icon:"images/characters/rover_havoc.png", fallback:""},
  {id:"calcharo", name:"カカロ", element:"electro", icon:"images/characters/calcharo.png", fallback:""},
  {id:"lingyang", name:"凌陽", element:"glacio", icon:"images/characters/lingyang.png", fallback:""},
  {id:"jianxin", name:"鑑心", element:"aero", icon:"images/characters/jianxin.png", fallback:""},
  {id:"verina", name:"ヴェリーナ", element:"spectro", icon:"images/characters/verina.png", fallback:""},
  {id:"encore", name:"アンコ", element:"fusion", icon:"images/characters/encore.png", fallback:""},
  {id:"buling", name:"卜霊", element:"electro", icon:"images/characters/buling.png", fallback:""},
  {id:"lumi", name:"灯灯", element:"electro", icon:"images/characters/lumi.png", fallback:""},
  {id:"youhu", name:"釉瑚", element:"glacio", icon:"images/characters/youhu.png", fallback:""},
  {id:"yuanwu", name:"淵武", element:"electro", icon:"images/characters/yuanwu.png", fallback:""},
  {id:"danjin", name:"丹瑾", element:"havoc", icon:"images/characters/danjin.png", fallback:""},
  {id:"sanhua", name:"散華", element:"glacio", icon:"images/characters/sanhua.png", fallback:""},
  {id:"Mortefi", name:"モルトフィー", element:"fusion", icon:"images/characters/mortefi.png", fallback:""},
  {id:"taoqi", name:"桃祈", element:"havoc", icon:"images/characters/taoqi.png", fallback:""},
  {id:"aalto", name:"アールト", element:"aero", icon:"images/characters/aalto.png", fallback:""},
  {id:"baizhi", name:"白芷", element:"glacio", icon:"images/characters/baizhi.png", fallback:""},
  {id:"yangyang", name:"秧秧", element:"aero", icon:"images/characters/yangyang.png", fallback:""},
  {id:"chixia", name:"熾霞", element:"fusion", icon:"images/characters/chixia.png", fallback:""},
  {id:"rover_spectro", name:"漂泊者(回折)", element:"spectro", icon:"images/characters/rover_spectro.png", fallback:""}
];

const elements = [
  { id: "all", name: "All", icon: "" },
  { id: "fusion", name: "焦熱", icon: "images/elements/fusion.png" },
  { id: "glacio", name: "凝縮", icon: "images/elements/glacio.png" },
  { id: "aero", name: "気動", icon: "images/elements/aero.png" },
  { id: "electro", name: "電導", icon: "images/elements/electro.png" },
  { id: "spectro", name: "回折", icon: "images/elements/spectro.png" },
  { id: "havoc", name: "消滅", icon: "images/elements/havoc.png" }
];

let selectedElement = "all";

const skills = [
  "通常1","通常2","通常3","通常4","通常5","通常6","強通常1","強通常2","強通常3","強通常4","強通常5","強通常6","空中1","空中2","空中3","強空中","落下","強落下",
  "重撃","重撃1","重撃2","強重撃","強重撃1","強重撃2","強重撃3",
  "スキル","スキル1","スキル2","強スキル","強スキル1","強スキル2",
  "解放","強解放",
  "音骸","協和破壊",
  "終奏","変身",
  "ジャンプ","回避","出場のみ",
  "改行"
];

const characterSpecificSkills = {
  jingran: ["通常長押し"],
  qingxiao: ["通常長押し"],
  yangyang_xuanling: ["強重撃蒼","強重撃羽"],
  lucilla: ["通常長押し","スキル長押し"],
  hiyuki: ["居合1","居合2","居合3"],
  camellya: ["通常長押し"],
  jiyan: ["通常長押し"],
  chixia: ["スキル長押し"],
  zhezhi: ["強スキル3"],
  carlotta: ["解放1","解放2","解放3","解放4","解放5","解放6","強音骸"]
};

let selectedCharacter = characters[0].id;
let opening = [];
let loop = [];
let dragging = null;

let activeTarget = "opening";

let historyStack = [];
let historyIndex = -1;
const MAX_HISTORY = 30;

function recordState() {
  historyStack = historyStack.slice(0, historyIndex + 1);
  const currentState = {
    opening: JSON.parse(JSON.stringify(opening)),
    loop: JSON.parse(JSON.stringify(loop))
  };
  historyStack.push(currentState);

  if (historyStack.length > MAX_HISTORY) {
    historyStack.shift();
  } else {
    historyIndex++;
  }
  updateHistoryButtons();
}

function updateHistoryButtons() {
  const undoBtn = document.querySelector("#undoBtn");
  const redoBtn = document.querySelector("#redoBtn");
  if (undoBtn) undoBtn.disabled = historyIndex <= 0;
  if (redoBtn) redoBtn.disabled = historyIndex >= historyStack.length - 1;
}

function undo() {
  if (historyIndex > 0) {
    historyIndex--;
    applyHistoryState(historyStack[historyIndex]);
  }
}

function redo() {
  if (historyIndex < historyStack.length - 1) {
    historyIndex++;
    applyHistoryState(historyStack[historyIndex]);
  }
}

function applyHistoryState(state) {
  opening = JSON.parse(JSON.stringify(state.opening));
  loop = JSON.parse(JSON.stringify(state.loop));
  
  renderEditor(document.querySelector("#openingEditor"), opening, "opening");
  renderEditor(document.querySelector("#loopEditor"), loop, "loop");
  saveDraft();
  drawPreview();
  updateHistoryButtons();
}

const undoBtn = document.querySelector("#undoBtn");
if (undoBtn) undoBtn.onclick = undo;

const redoBtn = document.querySelector("#redoBtn");
if (redoBtn) redoBtn.onclick = redo;

window.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
    if (e.shiftKey) {
      redo();
    } else {
      undo();
    }
  } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
    redo();
  }
});

const charList = document.querySelector("#characterList");
const skillList = document.querySelector("#skillList");
const editOpeningBtn = document.querySelector("#editOpeningBtn");
const editLoopBtn = document.querySelector("#editLoopBtn");

function findChar(id){return characters.find(c=>c.id===id)}

// 自動保存（localStorage）機能
const STORAGE_KEY = "wuwa_rotation_draft_v1";

function saveDraft() {
  const draftData = {
    title: document.querySelector("#titleInput")?.value || "",
    openingTime: document.querySelector("#openingTimeInput")?.value || "",
    loopTime: document.querySelector("#loopTimeInput")?.value || "",
    showLoop: document.querySelector("#showLoop")?.checked ?? true,
    opening: opening,
    loop: loop
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(draftData));
}

function loadDraft() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const draftData = JSON.parse(raw);
    if (draftData.title !== undefined && document.querySelector("#titleInput")) document.querySelector("#titleInput").value = draftData.title;
    if (draftData.openingTime !== undefined && document.querySelector("#openingTimeInput")) document.querySelector("#openingTimeInput").value = draftData.openingTime;
    if (draftData.loopTime !== undefined && document.querySelector("#loopTimeInput")) document.querySelector("#loopTimeInput").value = draftData.loopTime;
    if (draftData.showLoop !== undefined && document.querySelector("#showLoop")) document.querySelector("#showLoop").checked = draftData.showLoop;
    if (Array.isArray(draftData.opening)) opening = draftData.opening;
    if (Array.isArray(draftData.loop)) loop = draftData.loop;
  } catch (e) {
    console.error("Draft load error:", e);
  }
}

// プリセット管理機能
const PRESETS_STORAGE_KEY = "wuwa_presets_list_v1";

function getStoredPresets() {
  const raw = localStorage.getItem(PRESETS_STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

function updatePresetSelectOptions() {
  const select = document.querySelector("#presetSelect");
  if (!select) return;

  const presets = getStoredPresets();
  select.innerHTML = '<option value="">保存したプリセットを選択...</option>';
  
  Object.keys(presets).forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });
}

const savePresetBtn = document.querySelector("#savePresetBtn");
if (savePresetBtn) {
  savePresetBtn.onclick = () => {
    const nameInput = document.querySelector("#presetNameInput");
    const name = nameInput ? nameInput.value.trim() : "";

    if (!name) {
      alert("プリセット名を入力してください。");
      return;
    }

    const presets = getStoredPresets();
    if (presets[name]) {
      if (!confirm(`「${name}」は既に存在します。上書きしますか？`)) {
        return;
      }
    }

    presets[name] = {
      title: document.querySelector("#titleInput")?.value || "",
      openingTime: document.querySelector("#openingTimeInput")?.value || "",
      loopTime: document.querySelector("#loopTimeInput")?.value || "",
      showLoop: document.querySelector("#showLoop")?.checked ?? true,
      opening: opening,
      loop: loop
    };

    localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(presets));
    updatePresetSelectOptions();
    if (nameInput) nameInput.value = "";
    alert(`プリセット「${name}」を保存しました！`);
  };
}

const loadPresetBtn = document.querySelector("#loadPresetBtn");
if (loadPresetBtn) {
  loadPresetBtn.onclick = () => {
    const select = document.querySelector("#presetSelect");
    const selectedName = select ? select.value : "";

    if (!selectedName) {
      alert("呼び出したいプリセットを選択してください。");
      return;
    }

    const presets = getStoredPresets();
    const data = presets[selectedName];
    if (!data) return;

    if (data.title !== undefined && document.querySelector("#titleInput")) document.querySelector("#titleInput").value = data.title;
    if (data.openingTime !== undefined && document.querySelector("#openingTimeInput")) document.querySelector("#openingTimeInput").value = data.openingTime;
    if (data.loopTime !== undefined && document.querySelector("#loopTimeInput")) document.querySelector("#loopTimeInput").value = data.loopTime;
    if (data.showLoop !== undefined && document.querySelector("#showLoop")) document.querySelector("#showLoop").checked = data.showLoop;
    if (Array.isArray(data.opening)) opening = data.opening;
    if (Array.isArray(data.loop)) loop = data.loop;

    renderAll();
    recordState();
    alert(`「${selectedName}」を読み込みました！`);
  };
}

const deletePresetBtn = document.querySelector("#deletePresetBtn");
if (deletePresetBtn) {
  deletePresetBtn.onclick = () => {
    const select = document.querySelector("#presetSelect");
    const selectedName = select ? select.value : "";

    if (!selectedName) {
      alert("削除したいプリセットを選択してください。");
      return;
    }

    if (confirm(`プリセット「${selectedName}」を削除しますか？`)) {
      const presets = getStoredPresets();
      delete presets[selectedName];
      localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(presets));
      updatePresetSelectOptions();
      alert(`「${selectedName}」を削除しました。`);
    }
  };
}

function renderSelectors(){
  if (!charList) return;
  charList.innerHTML = "";

  let filterContainer = document.querySelector("#elementFilter");
  if (!filterContainer) {
    filterContainer = document.createElement("div");
    filterContainer.id = "elementFilter";
    filterContainer.className = "element-filter";
    charList.parentNode.insertBefore(filterContainer, charList);
  }
  filterContainer.innerHTML = "";

  elements.forEach(elem => {
    const b = document.createElement("button");
    b.className = "element-btn" + (selectedElement === elem.id ? " selected" : "");
    
    if (elem.icon) {
      const img = document.createElement("img");
      img.src = elem.icon;
      img.onerror = () => img.style.display = "none";
      b.appendChild(img);
    }
    
    const span = document.createElement("span");
    span.textContent = elem.name;
    b.appendChild(span);

    b.onclick = () => {
      selectedElement = elem.id;
      renderSelectors();
    };
    filterContainer.appendChild(b);
  });

  const filteredChars = selectedElement === "all" 
    ? characters 
    : characters.filter(c => c.element === selectedElement);

  filteredChars.forEach(c => {
    const b = document.createElement("button");
    b.className = "character-btn" + (selectedCharacter === c.id ? " selected" : "");
    const img = document.createElement("img");
    img.src = c.icon;
    img.onerror = () => img.style.display = "none";
    b.append(img, document.createTextNode(c.name));
    b.onclick = () => { selectedCharacter = c.id; renderSelectors(); };
    charList.appendChild(b);
  });

  if (!skillList) return;
  skillList.innerHTML = "";
  const extraSkills = characterSpecificSkills[selectedCharacter] || [];
  const activeSkills = [...skills, ...extraSkills];

  activeSkills.forEach(skill => {
    const b = document.createElement("button");
    b.textContent = skill;
    b.onclick = () => {
      const targetList = activeTarget === "opening" ? opening : loop;
      targetList.push({charId: selectedCharacter, skill});
      renderAll();
      recordState();
    };
    skillList.appendChild(b);
  });
}

function updateModeButtons() {
  if (!editOpeningBtn || !editLoopBtn) return;
  if (activeTarget === "opening") {
    editOpeningBtn.textContent = "編集中...";
    editOpeningBtn.classList.add("primary");
    editLoopBtn.textContent = "ループローテを編集する";
    editLoopBtn.classList.remove("primary");
  } else {
    editOpeningBtn.textContent = "開幕ローテを編集する";
    editOpeningBtn.classList.remove("primary");
    editLoopBtn.textContent = "編集中...";
    editLoopBtn.classList.add("primary");
  }
}

if (editOpeningBtn) {
  editOpeningBtn.onclick = () => {
    activeTarget = "opening";
    updateModeButtons();
  };
}

if (editLoopBtn) {
  editLoopBtn.onclick = () => {
    activeTarget = "loop";
    updateModeButtons();
  };
}

function renderEditor(el,list,type){
  if (!el) return;
  el.innerHTML="";
  if(!list.length){
    el.innerHTML='<span class="empty">上のキャラクターと技を選んで追加してください。</span>';
    return;
  }
  list.forEach((a,i)=>{
    const c=findChar(a.charId);
    const chip=document.createElement("div");
    chip.className="action-chip";
    chip.draggable=true;
    chip.innerHTML=`<img src="${c ? c.icon : ''}" onerror="this.style.display='none'"><span class="skill">${a.skill}</span><button class="remove">×</button>`;
    
    chip.querySelector(".remove").onclick=e=>{
      e.stopPropagation();
      list.splice(i,1);
      renderAll();
      recordState();
    };
    
    chip.addEventListener("dragstart",()=>{dragging={type,index:i};chip.classList.add("dragging")});
    chip.addEventListener("dragend",()=>{dragging=null;chip.classList.remove("dragging")});
    chip.addEventListener("dragover",e=>e.preventDefault());
    chip.addEventListener("drop",e=>{
      e.preventDefault();
      if(!dragging||dragging.type!==type||dragging.index===i)return;
      const item=list.splice(dragging.index,1)[0];
      list.splice(i,0,item);
      renderAll();
      recordState();
    });
    el.appendChild(chip);
  });
}

function grouped(list){
  const out=[];
  for(const item of list){
    const last=out[out.length-1];
    if(last&&last.charId===item.charId)last.skills.push(item.skill);
    else out.push({charId:item.charId,skills:[item.skill]});
  }
  return out;
}

function measureSkill(s){
  const canvas = document.querySelector("#previewCanvas");
  if (!canvas) return 78;
  const ctx = canvas.getContext("2d");
  ctx.font = "bold 17px sans-serif";
  return Math.max(78, ctx.measureText(s).width + 28);
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();
}

const imageCache={};
function loadImage(src){
  if(!src) return new Image();
  if(!imageCache[src]){
    imageCache[src]=new Image();
    imageCache[src].src=src;
    imageCache[src].onload=drawPreview;
  }
  return imageCache[src];
}

function drawArrow(ctx,x,y){
  ctx.save();
  ctx.strokeStyle="#d9aa3c";
  ctx.lineWidth=5;
  ctx.lineCap="round";
  ctx.lineJoin="round";
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+20,y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x+13,y-8);
  ctx.lineTo(x+23,y);
  ctx.lineTo(x+13,y+8);
  ctx.stroke();
  ctx.restore();
}

function drawSection(ctx, title, list, startY) {
  let y = startY;

  ctx.fillStyle = "#f2f2f2";
  ctx.font = "bold 38px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(title, 800, y + 35);
  ctx.textAlign = "left";

  ctx.strokeStyle = "rgba(255,190,70,.75)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(35, y + 58);
  ctx.lineTo(1565, y + 58);
  ctx.stroke();

  if (!list.length) {
    ctx.fillStyle = "#87909e";
    ctx.font = "18px sans-serif";
    ctx.fillText("ローテーション未登録", 60, y + 100);
    return y + 130;
  }

  const groups = grouped(list);

  groups.forEach(g => {
    const merged = [];
    g.skills.forEach(skill => {
      if (merged.length === 0) {
        merged.push(skill);
        return;
      }
      const last = merged[merged.length - 1];
      const matchCurr = typeof skill === "string" ? skill.match(/^(.+?)([0-9]+)$/) : null;
      const matchLast = typeof last === "string" ? last.match(/^(.+?)([0-9]+)$/) : null;

      if (matchCurr && matchLast && matchCurr[1] === matchLast[1]) {
        merged[merged.length - 1] = last + matchCurr[2];
      } else {
        merged.push(skill);
      }
    });
    g.skills = merged;
  });

  const ARROW_WIDTH = 28;
  const GAP_AFTER_ARROW = 12;
  const ROW_HEIGHT = 90;
  const START_X = 40;
  const MAX_X = 1520;
  
  let x = START_X;
  let rowY = y + 75;

  groups.forEach((g, i) => {
    const c = findChar(g.charId);
    let needCharIcon = true;

    g.skills.forEach((skill) => {
      if (skill === "改行") {
        x = START_X;
        rowY += ROW_HEIGHT;
        needCharIcon = true;
        return;
      }

      const skillW = measureSkill(skill);
      const itemW = (needCharIcon ? 78 : 0) + skillW;

      if (x + itemW > MAX_X && x > START_X) {
        x = START_X;
        rowY += ROW_HEIGHT;
        needCharIcon = true;
      }

      if (needCharIcon) {
        if (c) {
          const img = loadImage(c.icon);
          ctx.save();
          ctx.beginPath();
          ctx.arc(x + 33, rowY + 33, 32, 0, Math.PI * 2);
          ctx.clip();
          if (img.complete && img.naturalWidth) {
            ctx.drawImage(img, x + 1, rowY + 1, 64, 64);
          } else {
            ctx.fillStyle = "#554b34";
            ctx.fillRect(x, rowY, 66, 66);
            ctx.fillStyle = "#fff";
            ctx.font = "bold 28px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(c.fallback || "", x + 33, rowY + 43);
          }
          ctx.restore();

          ctx.strokeStyle = "#d9aa3c";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(x + 33, rowY + 33, 33, 0, Math.PI * 2);
          ctx.stroke();
        }
        x += 78;
        needCharIcon = false;
      }

      roundRect(ctx, x, rowY + 14, skillW, 38, 7);
      ctx.fillStyle = "#f1f1f1";
      ctx.fill();
      ctx.strokeStyle = "#9b9b9b";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = "#222";
      ctx.font = "bold 17px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(skill, x + skillW / 2, rowY + 39);
      ctx.textAlign = "left";

      x += skillW + 8;
    });

    if (i < groups.length - 1) {
      x += 4;
      if (x + ARROW_WIDTH + GAP_AFTER_ARROW + 78 > MAX_X) {
        x = START_X;
        rowY += ROW_HEIGHT;
      } else {
        drawArrow(ctx, x, rowY + 33);
        x += ARROW_WIDTH + GAP_AFTER_ARROW;
      }
    }
  });

  return rowY + ROW_HEIGHT + 20;
}

function drawPreview() {
  const canvas = document.querySelector("#previewCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = 1600;

  const rawTitle = document.querySelector("#titleInput")?.value || "開幕ローテ";
  const openingTime = document.querySelector("#openingTimeInput")?.value;
  const loopTime = document.querySelector("#loopTimeInput")?.value;
  const showLoop = document.querySelector("#showLoop")?.checked ?? true;

  const openingTitle = rawTitle + (openingTime ? ` (${openingTime}s)` : "");
  const loopTitle = "ループローテ" + (loopTime ? ` (${loopTime}s)` : "");

  let calculatedHeight = 20;

  calculatedHeight = drawSection(ctx, openingTitle, opening, calculatedHeight);

  if (showLoop) {
    calculatedHeight = drawSection(ctx, loopTitle, loop, calculatedHeight);
  }

  const finalH = Math.max(500, calculatedHeight + 60);
  canvas.height = finalH;

  ctx.clearRect(0, 0, W, finalH);

  const g = ctx.createLinearGradient(0, 0, W, finalH);
  g.addColorStop(0, "#171c23");
  g.addColorStop(0.55, "#20262e");
  g.addColorStop(1, "#11161d");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, finalH);

  ctx.strokeStyle = "rgba(255,255,255,.055)";
  ctx.lineWidth = 2;
  for (let yy = 100; yy < finalH; yy += 24) {
    ctx.beginPath();
    ctx.moveTo(0, yy);
    ctx.lineTo(W, yy - 75);
    ctx.stroke();
  }

  let currentY = 20;
  currentY = drawSection(ctx, openingTitle, opening, currentY);
  if (showLoop) {
    drawSection(ctx, loopTitle, loop, currentY);
  }

  ctx.fillStyle = "rgba(255,255,255,.65)";
  ctx.font = "italic 20px serif";
  ctx.textAlign = "right";
  ctx.fillText("Wuwa Rotation Maker | Created by @blairwuwa613", 1545, finalH - 25);
  ctx.textAlign = "left";
}

// リセット処理
const clearBtn = document.querySelector("#clearBtn");
if (clearBtn) {
  clearBtn.onclick = () => {
    if (confirm("ローテーションをすべて消去しますか？")) {
      opening = [];
      loop = [];
      localStorage.removeItem(STORAGE_KEY);
      renderAll();
      recordState();
    }
  };
}

const titleInput = document.querySelector("#titleInput");
if (titleInput) titleInput.oninput = () => { saveDraft(); drawPreview(); };

const showLoopChk = document.querySelector("#showLoop");
if (showLoopChk) showLoopChk.onchange = () => { saveDraft(); drawPreview(); };

const opTimeInput = document.querySelector("#openingTimeInput");
if (opTimeInput) opTimeInput.oninput = () => { saveDraft(); drawPreview(); };

const lpTimeInput = document.querySelector("#loopTimeInput");
if (lpTimeInput) lpTimeInput.oninput = () => { saveDraft(); drawPreview(); };

// 画像エクスポート処理
const exportBtn = document.querySelector("#exportBtn");
if (exportBtn) {
  exportBtn.onclick = () => {
    const canvas = document.querySelector("#previewCanvas");
    if (!canvas) return;
    try {
      canvas.toBlob((blob) => {
        if (!blob) {
          alert("画像の生成に失敗しました。");
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.download = "wuthering-waves-rotation.png";
        a.href = url;
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    } catch (e) {
      console.error(e);
      alert("画像の出力に失敗しました。");
    }
  };
}

// JSON書き出し（保存）機能
const saveJsonBtn = document.querySelector("#saveJsonBtn");
if (saveJsonBtn) {
  saveJsonBtn.onclick = () => {
    const exportData = {
      version: 1,
      title: document.querySelector("#titleInput")?.value || "",
      openingTime: document.querySelector("#openingTimeInput")?.value || "",
      loopTime: document.querySelector("#loopTimeInput")?.value || "",
      showLoop: document.querySelector("#showLoop")?.checked ?? true,
      opening: opening,
      loop: loop
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rotation.json";
    a.click();
    URL.revokeObjectURL(url);
  };
}

// JSON読み込み機能
const loadJsonInput = document.querySelector("#loadJsonInput");
if (loadJsonInput) {
  loadJsonInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.title !== undefined && document.querySelector("#titleInput")) document.querySelector("#titleInput").value = data.title;
        if (data.openingTime !== undefined && document.querySelector("#openingTimeInput")) document.querySelector("#openingTimeInput").value = data.openingTime;
        if (data.loopTime !== undefined && document.querySelector("#loopTimeInput")) document.querySelector("#loopTimeInput").value = data.loopTime;
        if (data.showLoop !== undefined && document.querySelector("#showLoop")) document.querySelector("#showLoop").checked = data.showLoop;
        if (Array.isArray(data.opening)) opening = data.opening;
        if (Array.isArray(data.loop)) loop = data.loop;

        renderAll();
        recordState();
        alert("JSONファイルからデータの読み込みが完了しました！");
      } catch (err) {
        console.error(err);
        alert("ファイルの読み込みに失敗しました。正しいJSONファイルか確認してください。");
      }
      loadJsonInput.value = "";
    };
    reader.readAsText(file);
  };
}

function renderAll(){
  renderEditor(document.querySelector("#openingEditor"), opening, "opening");
  renderEditor(document.querySelector("#loopEditor"), loop, "loop");
  updateModeButtons();
  saveDraft();
  drawPreview();
}

// 初期化処理
loadDraft();
updatePresetSelectOptions();
renderSelectors();
renderAll();
recordState();


/* ============================================================
   マトリクス編成アプリ用
   ============================================================ */

// 非表示にする変身キャラのIDリスト
const MATRIX_EXCLUDED_CHAR_IDS = ["fleurdelys", "mech scout"];

// 漂泊者のIDリスト
const ROVER_IDS = ["rover_spectro", "rover_havoc", "rover_aero", "rover_electro"];

function isRover(charId) {
  return ROVER_IDS.includes(charId);
}

function isCharInTeam(team, charId) {
  if (!charId) return false;
  if (isRover(charId)) {
    return team.chars.some(id => id && isRover(id));
  }
  return team.chars.includes(charId);
}

const DEFAULT_BUFF_CHARS = ["verina", "shorekeeper", "baizhi", "mornye", "suisui", "buling"];

const MATRIX_STORAGE_KEY = "wuwa_matrix_draft_v1";

let matrixState = {
  buffCharIds: [],
  unownedCharIds: [],
  selectedElement: "all",
  activeSlot: { teamIndex: 0, slotIndex: 0 },
  teams: [
    { id: 1, name: "編成 1", chars: [null, null, null], scoreGrade: "S" },
    { id: 2, name: "編成 2", chars: [null, null, null], scoreGrade: "A" },
    { id: 3, name: "編成 3", chars: [null, null, null], scoreGrade: "B" }
  ]
};

function saveMatrixState() {
  localStorage.setItem(MATRIX_STORAGE_KEY, JSON.stringify(matrixState));
}

function loadMatrixState() {
  const raw = localStorage.getItem(MATRIX_STORAGE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (data.buffCharIds) matrixState.buffCharIds = data.buffCharIds;
    if (data.unownedCharIds) matrixState.unownedCharIds = data.unownedCharIds;
    if (data.teams && Array.isArray(data.teams)) matrixState.teams = data.teams;
    if (data.selectedElement) matrixState.selectedElement = data.selectedElement;
  } catch (e) {
    console.error("Matrix state load error:", e);
  }
}

function getCharMaxStamina(charId) {
  if (DEFAULT_BUFF_CHARS.includes(charId)) return 2;
  
  if (isRover(charId)) {
    if (matrixState.buffCharIds.includes("rover") || matrixState.buffCharIds.some(id => isRover(id))) {
      return 2;
    }
  } else if (matrixState.buffCharIds.includes(charId)) {
    return 2;
  }
  
  return 1;
}

function getCharUsedStamina(charId) {
  let count = 0;
  const targetIsRover = isRover(charId);

  matrixState.teams.forEach(team => {
    team.chars.forEach(id => {
      if (!id) return;
      if (targetIsRover) {
        if (isRover(id)) count++;
      } else {
        if (id === charId) count++;
      }
    });
  });
  return count;
}

function getCharRemainingStamina(charId) {
  const max = getCharMaxStamina(charId);
  const used = getCharUsedStamina(charId);
  return Math.max(0, max - used);
}

// 未所持切り替え関数
function toggleUnownedChar(charId) {
  const targetIds = isRover(charId) ? ROVER_IDS : [charId];
  const isCurrentlyUnowned = matrixState.unownedCharIds.includes(targetIds[0]);

  if (isCurrentlyUnowned) {
    matrixState.unownedCharIds = matrixState.unownedCharIds.filter(id => !targetIds.includes(id));
  } else {
    targetIds.forEach(id => {
      if (!matrixState.unownedCharIds.includes(id)) {
        matrixState.unownedCharIds.push(id);
      }
    });
  }
  saveMatrixState();
  renderMatrixCharacterList();
}

function setupAppTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const rotationView = document.querySelector("#rotationView");
  const matrixView = document.querySelector("#matrixView");
  const headerButtons = document.querySelector(".header-buttons");
  const headerMatrixBuff = document.querySelector("#headerMatrixBuff");

  tabBtns.forEach(btn => {
    btn.onclick = () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const tab = btn.dataset.tab;
      if (tab === "rotation") {
        if (rotationView) rotationView.style.display = "block";
        if (matrixView) matrixView.style.display = "none";
        if (headerButtons) headerButtons.style.display = "flex";
        if (headerMatrixBuff) headerMatrixBuff.style.display = "none";
      } else if (tab === "matrix") {
        if (rotationView) rotationView.style.display = "none";
        if (matrixView) matrixView.style.display = "block";
        if (headerButtons) headerButtons.style.display = "none";
        if (headerMatrixBuff) headerMatrixBuff.style.display = "flex";
        renderMatrixAll();
      }
    };
  });
}

function setupBuffModalEvents() {
  const openBtn = document.querySelector("#openBuffModalBtn");
  const closeBtn = document.querySelector("#closeBuffModalBtn");
  const saveBtn = document.querySelector("#saveBuffModalBtn");
  const modal = document.querySelector("#buffModal");

  if (openBtn && modal) {
    openBtn.onclick = () => {
      modal.style.display = "flex";
      renderMatrixBuffSelector();
    };
  }

  const closeModal = () => {
    if (modal) modal.style.display = "none";
    renderSelectedBuffSummary();
  };

  if (closeBtn) closeBtn.onclick = closeModal;
  if (saveBtn) saveBtn.onclick = closeModal;

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }
}

function renderSelectedBuffSummary() {
  const container = document.querySelector("#selectedBuffDisplay");
  if (!container) return;
  container.innerHTML = "";

  const seasonBuffIds = matrixState.buffCharIds;

  if (seasonBuffIds.length === 0) {
    container.innerHTML = `<span class="empty-text">選択されていません</span>`;
    return;
  }

  seasonBuffIds.forEach(id => {
    const badge = document.createElement("div");
    badge.className = "buff-summary-badge";

    const img = document.createElement("img");
    const name = document.createElement("span");

    if (id === "rover" || isRover(id)) {
      img.src = "images/characters/rover_spectro.png";
      name.textContent = "漂泊者";
    } else {
      const c = findChar(id);
      if (!c) return;
      img.src = c.icon;
      name.textContent = c.name;
    }

    img.onerror = () => img.style.display = "none";
    badge.append(img, name);
    container.appendChild(badge);
  });
}

function renderMatrixBuffSelector() {
  const container = document.querySelector("#matrixBuffCharList");
  if (!container) return;
  container.innerHTML = "";

  const filteredChars = characters.filter(c => 
    !DEFAULT_BUFF_CHARS.includes(c.id) && 
    !isRover(c.id) && 
    !MATRIX_EXCLUDED_CHAR_IDS.includes(c.id)
  );
  
  const displayList = [
    { id: "rover", name: "漂泊者", icon: "images/characters/rover_spectro.png" },
    ...filteredChars
  ];

  displayList.forEach(c => {
    const isBuffed = (c.id === "rover")
      ? (matrixState.buffCharIds.includes("rover") || matrixState.buffCharIds.some(id => isRover(id)))
      : matrixState.buffCharIds.includes(c.id);

    const btn = document.createElement("button");
    btn.className = "character-btn" + (isBuffed ? " selected" : "");

    const img = document.createElement("img");
    img.src = c.icon;
    img.onerror = () => img.style.display = "none";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = c.name;

    btn.append(img, nameSpan);

    btn.onclick = () => {
      if (c.id === "rover") {
        if (isBuffed) {
          matrixState.buffCharIds = matrixState.buffCharIds.filter(id => id !== "rover" && !isRover(id));
        } else {
          matrixState.buffCharIds.push("rover");
        }
      } else {
        if (isBuffed) {
          matrixState.buffCharIds = matrixState.buffCharIds.filter(id => id !== c.id);
        } else {
          matrixState.buffCharIds.push(c.id);
        }
      }
      saveMatrixState();
      renderMatrixBuffSelector();
      renderMatrixCharacterList();
    };

    container.appendChild(btn);
  });
}

// マトリクス用キャラ選択一覧
function renderMatrixCharacterList() {
  const charContainer = document.querySelector("#matrixCharacterList");
  const filterContainer = document.querySelector("#matrixElementFilter");
  if (!charContainer || !filterContainer) return;

  filterContainer.innerHTML = "";
  elements.forEach(elem => {
    const b = document.createElement("button");
    b.className = "element-btn" + (matrixState.selectedElement === elem.id ? " selected" : "");

    if (elem.icon) {
      const img = document.createElement("img");
      img.src = elem.icon;
      img.onerror = () => img.style.display = "none";
      b.appendChild(img);
    }

    const span = document.createElement("span");
    span.textContent = elem.name;
    b.appendChild(span);

    b.onclick = () => {
      matrixState.selectedElement = elem.id;
      saveMatrixState();
      renderMatrixCharacterList();
    };
    filterContainer.appendChild(b);
  });

  const activeTeam = matrixState.teams[matrixState.activeSlot.teamIndex];

  charContainer.innerHTML = "";
  const baseChars = characters.filter(c => !MATRIX_EXCLUDED_CHAR_IDS.includes(c.id));
  const filtered = matrixState.selectedElement === "all"
    ? baseChars
    : baseChars.filter(c => c.element === matrixState.selectedElement);

  filtered.forEach(c => {
    const isUnowned = matrixState.unownedCharIds.includes(c.id);
    const remaining = getCharRemainingStamina(c.id);
    const maxStamina = getCharMaxStamina(c.id);

    const isAlreadyInCurrentTeam = activeTeam ? isCharInTeam(activeTeam, c.id) : false;
    const isSelectable = !isUnowned && remaining > 0 && !isAlreadyInCurrentTeam;

    const card = document.createElement("div");
    card.className = "matrix-char-card" + 
      (isUnowned ? " unowned" : "") + 
      (!isSelectable && !isUnowned ? " disabled" : "");

    const img = document.createElement("img");
    img.src = c.icon;
    img.onerror = () => img.style.display = "none";

    const name = document.createElement("span");
    name.className = "char-name";
    name.textContent = c.name;

    card.append(img, name);

    if (isUnowned) {
      const unownedOverlay = document.createElement("div");
      unownedOverlay.className = "unowned-overlay";
      unownedOverlay.textContent = "未所持";
      card.appendChild(unownedOverlay);
    } else {
      const badge = document.createElement("span");
      badge.className = "stamina-badge" + (remaining === 0 ? " empty" : "");
      badge.textContent = `${remaining}/${maxStamina}`;
      card.appendChild(badge);
    }

    // 左クリック操作
    if (isSelectable) {
      card.onclick = () => {
        assignCharToActiveSlot(c.id);
      };
    }

    // 右クリック操作
    card.oncontextmenu = (e) => {
      e.preventDefault();
      toggleUnownedChar(c.id);
    };

    // タッチデバイス用：長押し判定
    let longPressTimer = null;
    let isLongPress = false;

    card.addEventListener("touchstart", (e) => {
      isLongPress = false;
      longPressTimer = setTimeout(() => {
        isLongPress = true;
        toggleUnownedChar(c.id);
      }, 500);
    }, { passive: true });

    card.addEventListener("touchend", (e) => {
      if (longPressTimer) clearTimeout(longPressTimer);
      if (isLongPress) {
        e.preventDefault();
      }
    });

    card.addEventListener("touchmove", () => {
      if (longPressTimer) clearTimeout(longPressTimer);
    }, { passive: true });

    charContainer.appendChild(card);
  });
}

function assignCharToActiveSlot(charId) {
  const { teamIndex, slotIndex } = matrixState.activeSlot;
  if (matrixState.teams[teamIndex]) {
    matrixState.teams[teamIndex].chars[slotIndex] = charId;

    let foundNext = false;
    for (let t = 0; t < matrixState.teams.length; t++) {
      for (let s = 0; s < 3; s++) {
        if (matrixState.teams[t].chars[s] === null) {
          matrixState.activeSlot = { teamIndex: t, slotIndex: s };
          foundNext = true;
          break;
        }
      }
      if (foundNext) break;
    }

    saveMatrixState();
    renderMatrixAll();
  }
}

function renderMatrixTeams() {
  const container = document.querySelector("#matrixTeamsContainer");
  if (!container) return;
  container.innerHTML = "";

  matrixState.teams.forEach((team, tIdx) => {
    const teamCard = document.createElement("div");
    teamCard.className = "matrix-team-card";

    const header = document.createElement("div");
    header.className = "team-header";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.className = "team-title-input";
    titleInput.value = team.name || `編成 ${tIdx + 1}`;
    titleInput.oninput = (e) => {
      team.name = e.target.value;
      saveMatrixState();
    };

    // チーム操作ボタン群
    const actionGroup = document.createElement("div");
    actionGroup.className = "team-action-group";
    actionGroup.style.display = "flex";
    actionGroup.style.gap = "6px";
    actionGroup.style.alignItems = "center";

    // 上へ移動ボタン
    const moveUpBtn = document.createElement("button");
    moveUpBtn.className = "btn small";
    moveUpBtn.textContent = "▲";
    moveUpBtn.title = "上へ移動";
    moveUpBtn.disabled = tIdx === 0;
    moveUpBtn.onclick = () => {
      if (tIdx > 0) {
        // 配列の要素を入れ替え
        const temp = matrixState.teams[tIdx];
        matrixState.teams[tIdx] = matrixState.teams[tIdx - 1];
        matrixState.teams[tIdx - 1] = temp;

        if (matrixState.activeSlot.teamIndex === tIdx) {
          matrixState.activeSlot.teamIndex = tIdx - 1;
        } else if (matrixState.activeSlot.teamIndex === tIdx - 1) {
          matrixState.activeSlot.teamIndex = tIdx;
        }

        saveMatrixState();
        renderMatrixAll();
      }
    };

    const moveDownBtn = document.createElement("button");
    moveDownBtn.className = "btn small";
    moveDownBtn.textContent = "▼";
    moveDownBtn.title = "下へ移動";
    moveDownBtn.disabled = tIdx === matrixState.teams.length - 1; 
    moveDownBtn.onclick = () => {
      if (tIdx < matrixState.teams.length - 1) {
        // 配列の要素を入れ替え
        const temp = matrixState.teams[tIdx];
        matrixState.teams[tIdx] = matrixState.teams[tIdx + 1];
        matrixState.teams[tIdx + 1] = temp;

        if (matrixState.activeSlot.teamIndex === tIdx) {
          matrixState.activeSlot.teamIndex = tIdx + 1;
        } else if (matrixState.activeSlot.teamIndex === tIdx + 1) {
          matrixState.activeSlot.teamIndex = tIdx;
        }

        saveMatrixState();
        renderMatrixAll();
      }
    };

    // 削除ボタン
    const delBtn = document.createElement("button");
    delBtn.className = "btn danger small";
    delBtn.textContent = "削除";
    delBtn.onclick = () => {
      if (confirm(`「${team.name}」を削除しますか？`)) {
        matrixState.teams.splice(tIdx, 1);
        if (matrixState.activeSlot.teamIndex >= matrixState.teams.length) {
          matrixState.activeSlot = { teamIndex: Math.max(0, matrixState.teams.length - 1), slotIndex: 0 };
        }
        saveMatrixState();
        renderMatrixAll();
      }
    };

    actionGroup.append(moveUpBtn, moveDownBtn, delBtn);
    header.append(titleInput, actionGroup);
    teamCard.appendChild(header);

    const slotsWrap = document.createElement("div");
    slotsWrap.className = "team-slots";

    for (let sIdx = 0; sIdx < 3; sIdx++) {
      const charId = team.chars[sIdx];
      const charData = charId ? findChar(charId) : null;
      const isActive = matrixState.activeSlot.teamIndex === tIdx && matrixState.activeSlot.slotIndex === sIdx;

      const slot = document.createElement("div");
      slot.className = "team-slot" + (isActive ? " active-slot" : "") + (charData ? " filled" : "");

      if (charData) {
        const img = document.createElement("img");
        img.src = charData.icon;
        img.onerror = () => img.style.display = "none";

        const name = document.createElement("span");
        name.textContent = charData.name;

        const removeBtn = document.createElement("button");
        removeBtn.className = "slot-remove-btn";
        removeBtn.textContent = "×";
        removeBtn.onclick = (e) => {
          e.stopPropagation();
          team.chars[sIdx] = null;
          matrixState.activeSlot = { teamIndex: tIdx, slotIndex: sIdx };
          saveMatrixState();
          renderMatrixAll();
        };

        slot.append(img, name, removeBtn);
      } else {
        slot.innerHTML = `<span class="empty-slot-text">+ 選択</span>`;
      }

      slot.onclick = () => {
        matrixState.activeSlot = { teamIndex: tIdx, slotIndex: sIdx };
        renderMatrixAll();
      };

      slotsWrap.appendChild(slot);
    }

    teamCard.appendChild(slotsWrap);
    container.appendChild(teamCard);
  });
}

const addMatrixTeamBtn = document.querySelector("#addMatrixTeamBtn");
if (addMatrixTeamBtn) {
  addMatrixTeamBtn.onclick = () => {
    const newId = matrixState.teams.length ? Math.max(...matrixState.teams.map(t => t.id)) + 1 : 1;
    matrixState.teams.push({
      id: newId,
      name: `編成 ${matrixState.teams.length + 1}`,
      chars: [null, null, null]
    });
    saveMatrixState();
    renderMatrixAll();
  };
}

function renderMatrixAll() {
  renderSelectedBuffSummary();
  renderMatrixCharacterList();
  renderMatrixTeams();
}

loadMatrixState();
setupAppTabs();
setupBuffModalEvents();
