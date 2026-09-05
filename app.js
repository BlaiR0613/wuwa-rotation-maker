const characters = [
  // {id:"", name:"", element:"", icon:"images/characters/.png", fallback:""},
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
  hiyuki: ["居合1","居合2","居合3",],
  lucilla: ["通常長押し","スキル長押し"],
  yangyang_xuanling: ["重撃蒼","重撃羽"]
};

let selectedCharacter = characters[0].id;
let opening = [];
let loop = [];
let dragging = null;

let activeTarget = "opening";

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
  charList.innerHTML = "";

  // 属性フィルターボタン用コンテナの作成
  let filterContainer = document.querySelector("#elementFilter");
  if (!filterContainer) {
    filterContainer = document.createElement("div");
    filterContainer.id = "elementFilter";
    filterContainer.className = "element-filter";
    // キャラリストの直前に挿入
    charList.parentNode.insertBefore(filterContainer, charList);
  }
  filterContainer.innerHTML = "";

  // 属性ボタンの生成
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

  // 選択中属性でキャラクターをフィルタリング
  const filteredChars = selectedElement === "all" 
    ? characters 
    : characters.filter(c => c.element === selectedElement);

  // キャラクターボタンの生成
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

  // スキルリストの生成
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
    };
    skillList.appendChild(b);
  });
}

function updateModeButtons() {
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

editOpeningBtn.onclick = () => {
  activeTarget = "opening";
  updateModeButtons();
};

editLoopBtn.onclick = () => {
  activeTarget = "loop";
  updateModeButtons();
};

function renderEditor(el,list,type){
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
    chip.innerHTML=`<img src="${c ? c.icon : ''}"><span class="skill">${a.skill}</span><button class="remove">×</button>`;
    chip.querySelector(".remove").onclick=e=>{e.stopPropagation();list.splice(i,1);renderAll()};
    chip.addEventListener("dragstart",()=>{dragging={type,index:i};chip.classList.add("dragging")});
    chip.addEventListener("dragend",()=>{dragging=null;chip.classList.remove("dragging")});
    chip.addEventListener("dragover",e=>e.preventDefault());
    chip.addEventListener("drop",e=>{
      e.preventDefault();
      if(!dragging||dragging.type!==type||dragging.index===i)return;
      const item=list.splice(dragging.index,1)[0];
      list.splice(i,0,item);
      renderAll();
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
  const ctx=document.querySelector("#previewCanvas").getContext("2d");
  ctx.font="bold 17px sans-serif";
  return Math.max(78,ctx.measureText(s).width+28);
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
document.querySelector("#clearBtn").onclick=()=>{
  if(confirm("ローテーションをすべて消去しますか？")){
    opening=[];
    loop=[];
    localStorage.removeItem(STORAGE_KEY);
    renderAll();
  }
};

document.querySelector("#titleInput").oninput = () => { saveDraft(); drawPreview(); };
document.querySelector("#showLoop").onchange = () => { saveDraft(); drawPreview(); };
document.querySelector("#openingTimeInput").oninput = () => { saveDraft(); drawPreview(); };
document.querySelector("#loopTimeInput").oninput = () => { saveDraft(); drawPreview(); };

// 画像エクスポート処理
document.querySelector("#exportBtn").onclick = () => {
  const canvas = document.querySelector("#previewCanvas");
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