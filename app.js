// Категории эмодзи
const EMOJI_CATEGORIES = {
    'Смайлики': [
        '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '🤓', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡', '😠', '😇', '🤠', '🤡', '🤥', '😷', '🤒', '🤕', '🤢', '🤧', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊'
    ],
    'Животные': [
        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦗', '🕷', '🕸', '🦂', '🦀', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🐇', '🦝', '🦨', '🦡', '🦫', '🦦', '🦥', '🐁', '🐀', '🦔'
    ],
    'Еда и напитки': [
        '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '8', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '🫖', '☕', '🍵', '🧃', '🥤', '🧋', '🍶', '🍺', '🍷', '🥂', '🥃', '🍸', '🍹', '🧉', '🍾'
    ],
    'Природа и погода': [
        '🌱', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '☘', '🍀', '🍁', '🍂', '🍃', '🌺', '🌸', '💐', '🌹', '🥀', '🌻', '🌼', '🌷', '🌞', '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌙', '🌎', '🌍', '🌏', '💫', '⭐', '🌟', '✨', '⚡', '☄', '💥', '🔥', '🌪', '🌈', '☀', '🌤', '⛅', '🌥', '☁', '🌦', '🌧', '⛈', '🌩', '🌨', '❄', '☃', '⛄', '🌬', '💨', '💧', '💦', '☔', '☂', '🌊', '🌫'
    ],
    'Спорт и активность': [
        '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🥊', '🥋', '🥅', '⛳', '⛸', '🎣', '🤿', '🎽', '🛹', '🛷', '⛷', '🏂', '🏋️', '🤼', '🤸', '⛹️', '🤺', '🤾', '🏌️', '🏄', '🏊', '🤽', '🚣', '🏇', '🧘', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖', '🏵', '🎗', '🎫', '🎟', '🎪', '🤹', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🎰', '🧩'
    ]
};

const emojiGrid = document.querySelector('.emoji-grid');
const clearButton = document.getElementById('clear-button');
const resultText = document.getElementById('result-text');

// Глобальные переменные
let selectedEmoji = '😀';
let isDrawing = false;
let isErasing = false;
let gridSize = 10;
let showGrid = true;
let emojiSize = 50;
let map = [];

function initEmojiGrid() {
    const emojiGrid = document.querySelector('.emoji-grid');
    emojiGrid.innerHTML = ''; // Очищаем контейнер
    
    // Создаем вкладки
    const tabs = document.createElement('div');
    tabs.className = 'tabs';
    const tabList = document.createElement('ul');
    
    // Находим категорию выбранного эмодзи
    let selectedCategory = Object.keys(EMOJI_CATEGORIES)[0];
    for (const [category, emojis] of Object.entries(EMOJI_CATEGORIES)) {
        if (emojis.includes(selectedEmoji)) {
            selectedCategory = category;
            break;
        }
    }
    
    // Добавляем вкладки для каждой категории
    Object.keys(EMOJI_CATEGORIES).forEach((category) => {
        const li = document.createElement('li');
        li.className = category === selectedCategory ? 'is-active' : '';
        
        const a = document.createElement('a');
        a.textContent = category;
        a.dataset.category = category;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            // Обновляем активную вкладку
            document.querySelectorAll('.tabs li').forEach(tab => tab.classList.remove('is-active'));
            li.classList.add('is-active');
            // Показываем эмодзи выбранной категории
            showCategoryEmojis(category);
        });
        
        li.appendChild(a);
        tabList.appendChild(li);
    });
    
    tabs.appendChild(tabList);
    emojiGrid.appendChild(tabs);
    
    // Создаем контейнер для эмодзи
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';
    emojiGrid.appendChild(emojiContainer);
    
    // Показываем эмодзи категории с выбранным эмодзи
    showCategoryEmojis(selectedCategory);
}

function showCategoryEmojis(category) {
    const emojiContainer = document.querySelector('.emoji-container');
    emojiContainer.innerHTML = ''; // Очищаем контейнер
    
    EMOJI_CATEGORIES[category].forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.textContent = emoji;
        
        if (emoji === selectedEmoji) {
            emojiItem.classList.add('active');
        }
        
        emojiItem.addEventListener('click', () => {
            document.querySelectorAll('.emoji-item').forEach(item => {
                item.classList.remove('active');
            });
            
            emojiItem.classList.add('active');
            selectedEmoji = emoji;
            saveToLocalStorage();
        });
        
        emojiContainer.appendChild(emojiItem);
    });
}

function init() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const gridSizeSelector = document.getElementById('grid-size');
    const showGridCheckbox = document.getElementById('show-grid');
    const clearButton = document.getElementById('clear-button');
    
    loadFromLocalStorage();
    initEmojiGrid();

    gridSizeSelector.addEventListener('change', (e) => {
        const newSize = parseInt(e.target.value);
        const oldSize = gridSize;
        gridSize = newSize;
        
        const oldMap = [...map];
        initMap();
        
        const minSize = Math.min(oldSize, newSize);
        for (let i = 0; i < minSize; i++) {
            for (let j = 0; j < minSize; j++) {
                map[i][j] = oldMap[i][j];
            }
        }
        
        resizeCanvas();
        updateResult();
        saveToLocalStorage();
        showNotification(`Размер таблицы изменен на ${gridSize}x${gridSize}`);
    });

    showGridCheckbox.addEventListener('change', (e) => {
        showGrid = e.target.checked;
        drawGrid();
        draw();
        saveToLocalStorage();
        showNotification(showGrid ? 'Сетка показана' : 'Сетка скрыта');
    });

    resizeCanvas();

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);
    canvas.addEventListener('contextmenu', handleContextMenu);

    document.getElementById('copy-button').addEventListener('click', copyToClipboard);
    document.getElementById('save-image-button').addEventListener('click', saveAsImage);
    clearButton.addEventListener('click', () => {
        clearMap();
    });
}

function initMap() {
    map = Array(gridSize).fill().map(() => Array(gridSize).fill('\xa0'));
}

function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    const container = document.querySelector('.canvas-container');
    
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    drawGrid();
    draw();
}

function drawGrid() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const cellSize = Math.min(canvas.width, canvas.height) / gridSize;
    
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();
    }
    
    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
    }
}

function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const cellSize = Math.min(canvas.width, canvas.height) / gridSize;
    
    const fontSize = cellSize * 0.8;
    ctx.font = `${fontSize}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = '#000000';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (showGrid) {
        drawGrid();
    }

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const x = j * cellSize + cellSize / 2;
            const y = i * cellSize + cellSize / 2;
            if (map[i][j] !== '\xa0') {
                ctx.fillText(map[i][j], x, y);
            }
        }
    }
}

function handleMouseDown(e) {
    if (e.button === 0) {
        isDrawing = true;
        isErasing = false;
        calculateCell(e);
    } else if (e.button === 2) {
        isErasing = true;
        isDrawing = false;
        calculateCell(e);
    }
}

function handleMouseMove(e) {
    if (isDrawing || isErasing) {
        calculateCell(e);
    }
}

function handleMouseUp() {
    isDrawing = false;
    isErasing = false;
}

function handleContextMenu(e) {
    e.preventDefault();
}

function calculateCell(e) {
    const canvas = document.getElementById('canvas');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const cellSize = Math.min(canvas.width, canvas.height) / gridSize;
    
    const cellX = Math.floor(x / cellSize);
    const cellY = Math.floor(y / cellSize);
    
    if (cellX >= 0 && cellX < gridSize && cellY >= 0 && cellY < gridSize) {
        const newValue = isErasing ? '\xa0' : selectedEmoji;
        map[cellY][cellX] = newValue;
        draw();
        updateResult();
        saveToLocalStorage();
    }
}

function clearMap() {
    initMap();
    resizeCanvas();
    drawGrid();
    draw();
    updateResult();
    saveToLocalStorage();
    showNotification('Таблица очищена', 'warning');
}

function saveAsImage() {
    const canvas = document.getElementById('canvas');
    const tempShowGrid = showGrid;
    
    showGrid = false;
    draw();
    
    const link = document.createElement('a');
    link.download = 'graphoji-' + new Date().toISOString().slice(0, 10) + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showGrid = tempShowGrid;
    draw();
    
    showNotification('Изображение сохранено!');
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification is-${type} is-light`;
    notification.innerHTML = `
        <button class="delete"></button>
        ${message}
    `;
    
    document.getElementById('notifications-container').appendChild(notification);
    
    notification.querySelector('.delete').addEventListener('click', () => {
        notification.remove();
    });
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function saveToLocalStorage() {
    localStorage.setItem('graphoji_map', JSON.stringify(map));
    localStorage.setItem('graphoji_gridSize', gridSize);
    localStorage.setItem('graphoji_showGrid', showGrid);
    localStorage.setItem('graphoji_selectedEmoji', selectedEmoji);
}

function loadFromLocalStorage() {
    const savedMap = localStorage.getItem('graphoji_map');
    const savedGridSize = localStorage.getItem('graphoji_gridSize');
    const savedShowGrid = localStorage.getItem('graphoji_showGrid');
    const savedSelectedEmoji = localStorage.getItem('graphoji_selectedEmoji');
    
    if (savedGridSize) {
        gridSize = parseInt(savedGridSize);
        document.getElementById('grid-size').value = gridSize;
    }
    
    if (savedShowGrid !== null) {
        showGrid = savedShowGrid === 'true';
        document.getElementById('show-grid').checked = showGrid;
    }
    
    if (savedSelectedEmoji) {
        selectedEmoji = savedSelectedEmoji;
    }
    
    if (savedMap) {
        const parsedMap = JSON.parse(savedMap);
        if (parsedMap.length === gridSize && parsedMap[0].length === gridSize) {
            map = parsedMap;
        } else {
            initMap();
            const minSize = Math.min(gridSize, parsedMap.length);
            for (let i = 0; i < minSize; i++) {
                for (let j = 0; j < minSize; j++) {
                    map[i][j] = parsedMap[i][j];
                }
            }
        }
    } else {
        initMap();
    }
}

function updateResult() {
    const resultText = document.getElementById('result-text');
    const result = map.map(row => row.join('')).join('\n');
    resultText.value = result;
}

function copyToClipboard() {
    const result = map.map(row => row.join('')).join('\n');
    navigator.clipboard.writeText(result)
        .then(() => {
            showNotification('Текст скопирован в буфер обмена!');
        })
        .catch(() => {
            // Fallback для старых браузеров
            const resultText = document.getElementById('result-text');
            resultText.value = result;
            resultText.select();
            document.execCommand('copy');
            showNotification('Текст скопирован в буфер обмена!');
        });
}

window.addEventListener('load', () => {
    init();
    requestAnimationFrame(() => {
        resizeCanvas();
        drawGrid();
        draw();
        updateResult();
    });
});