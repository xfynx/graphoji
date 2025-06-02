// Emoji categories
const EMOJI_CATEGORIES = {
    'faces': [
        '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '🤓', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡', '😠', '😇', '🤠', '🤡', '🤥', '😷', '🤒', '🤕', '🤢', '🤧', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊'
    ],
    'animals': [
        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦗', '🕷', '🕸', '🦂', '🦀', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🐇', '🦝', '🦨', '🦡', '🦫', '🦦', '🦥', '🐁', '🐀', '🦔'
    ],
    'food': [
        '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '8', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '🫖', '☕', '🍵', '🧃', '🥤', '🧋', '🍶', '🍺', '🍷', '🥂', '🥃', '🍸', '🍹', '🧉', '🍾'
    ],
    'objects': [
        '🌱', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '☘', '🍀', '🍁', '🍂', '🍃', '🌺', '🌸', '💐', '🌹', '🥀', '🌻', '🌼', '🌷', '🌞', '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌙', '🌎', '🌍', '🌏', '💫', '⭐', '🌟', '✨', '⚡', '☄', '💥', '🔥', '🌪', '🌈', '☀', '🌤', '⛅', '🌥', '☁', '🌦', '🌧', '⛈', '🌩', '🌨', '❄', '☃', '⛄', '🌬', '💨', '💧', '💦', '☔', '☂', '🌊', '🌫'
    ],
    'symbols': [
        '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🥊', '🥋', '🥅', '⛳', '⛸', '🎣', '🤿', '🎽', '🛹', '🛷', '⛷', '🏂', '🏋️', '🤼', '🤸', '⛹️', '🤺', '🤾', '🏌️', '🏄', '🏊', '🤽', '🚣', '🏇', '🧘', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖', '🏵', '🎗', '🎫', '🎟', '🎪', '🤹', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🎰', '🧩'
    ]
};

const EMPTY_CELL_CHAR = '\xa0';

const emojiGrid = document.querySelector('.emoji-grid');
const clearButton = document.getElementById('clear-button');
const resultText = document.getElementById('result-text');

// Global variables
let selectedEmoji = '😀';
let isDrawing = false;
let isErasing = false;
let gridSize = 10;
let showGrid = true;
let emojiSize = 50;
let map = [];

function initEmojiGrid() {
    const emojiGrid = document.querySelector('.emoji-grid');
    // emojiGrid.innerHTML = ''; // Удаляем очистку контейнера

    // Create tabs
    const tabs = document.createElement('div');
    tabs.className = 'tabs';
    const tabList = document.createElement('ul');

    // Create a container for all emoji category contents
    const emojiCategoriesContainer = document.createElement('div');
    emojiCategoriesContainer.className = 'emoji-categories-container';
    emojiGrid.appendChild(tabs); // Add tabs first
    emojiGrid.appendChild(emojiCategoriesContainer); // Add the new container

    // Find selected emoji category
    let selectedCategory = Object.keys(EMOJI_CATEGORIES)[0];
    for (const [category, emojis] of Object.entries(EMOJI_CATEGORIES)) {
        if (emojis.includes(selectedEmoji)) {
            selectedCategory = category;
            break;
        }
    }

    // Add tabs and create content for each category
    Object.keys(EMOJI_CATEGORIES).forEach((category) => {
        const li = document.createElement('li');
        li.className = category === selectedCategory ? 'is-active' : '';

        const a = document.createElement('a');
        a.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        a.dataset.category = category;

        a.addEventListener('click', (e) => {
            e.preventDefault();
            // Update active tab
            document.querySelectorAll('.tabs li').forEach(tab => tab.classList.remove('is-active'));
            li.classList.add('is-active');
            // Show emojis of selected category
            showCategoryEmojis(category);
        });

        li.appendChild(a);
        tabList.appendChild(li);

        // Create content container for this category
        const emojiContainer = document.createElement('div');
        emojiContainer.className = 'emoji-container emoji-category-content'; // Add a common class and a specific one
        emojiContainer.dataset.category = category; // Store category in dataset

        // Populate the container with emojis (moved from showCategoryEmojis)
         EMOJI_CATEGORIES[category].forEach(emoji => {
            const emojiItem = document.createElement('div');
            emojiItem.className = 'emoji-item';
            emojiItem.textContent = emoji;

            if (emoji === selectedEmoji && category === selectedCategory) { // Check if this is the initially selected emoji in the active category
                 emojiItem.classList.add('active');
            }

            emojiItem.addEventListener('click', () => {
                // Deselect all emoji items in all categories
                document.querySelectorAll('.emoji-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Select the clicked emoji
                emojiItem.classList.add('active');
                selectedEmoji = emoji;
                isErasing = false; // Disable eraser mode when an emoji is selected
                saveToLocalStorage();
                updateControlButtons(); // Update button states
            });

            emojiContainer.appendChild(emojiItem);
        });

        emojiCategoriesContainer.appendChild(emojiContainer); // Add the category content to the main container
    });

    tabs.appendChild(tabList);


    // Initially show only the selected category content
    showCategoryEmojis(selectedCategory);
}

function showCategoryEmojis(category) {
    // Hide all category content containers
    document.querySelectorAll('.emoji-category-content').forEach(container => {
        container.classList.add('is-hidden');
    });

    // Show the content container for the selected category
    const selectedContainer = document.querySelector(`.emoji-category-content[data-category="${category}"]`);
    if (selectedContainer) {
        selectedContainer.classList.remove('is-hidden');
    }

    // Ensure the selected emoji is highlighted in the newly shown category
    // This is mostly handled by the emoji item click handler and initEmojiGrid,
    // but calling updateControlButtons here might help ensure consistency
    updateControlButtons();
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
        showNotification(`Grid size changed to ${gridSize}x${gridSize}`);
    });

    showGridCheckbox.addEventListener('change', (e) => {
        showGrid = e.target.checked;
        drawGrid();
        draw();
        saveToLocalStorage();
        showNotification(showGrid ? 'Grid shown' : 'Grid hidden');
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

    // Add event listener for eraser button
    document.getElementById('eraser-button').addEventListener('click', toggleEraserMode);

    updateControlButtons(); // Initial update of button states
}

function initMap() {
    map = Array(gridSize).fill().map(() => Array(gridSize).fill(EMPTY_CELL_CHAR));
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
            if (map[i][j] !== EMPTY_CELL_CHAR) {
                ctx.fillText(map[i][j], x, y);
            }
        }
    }
}

function handleMouseDown(e) {
    if (e.button === 0) {
        isDrawing = true;
        isErasing = document.getElementById('eraser-button').classList.contains('is-active');
        calculateCell(e);
    } else if (e.button === 2) {
        isDrawing = true;
        isErasing = true;
        calculateCell(e);
    }
}

function handleMouseMove(e) {
    if (isDrawing) {
        calculateCell(e);
    }
}

function handleMouseUp(e) {
    isDrawing = false;
    if (e.button === 2) {
        isErasing = document.getElementById('eraser-button').classList.contains('is-active');
    }
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
        const newValue = isErasing ? EMPTY_CELL_CHAR : selectedEmoji;
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
    showNotification('Canvas cleared', 'warning');
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
    
    showNotification('Image saved!');
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
            showNotification('Text copied to clipboard!');
        })
        .catch(() => {
            // Fallback for older browsers
            const resultText = document.getElementById('result-text');
            resultText.value = result;
            resultText.select();
            document.execCommand('copy');
            showNotification('Text copied to clipboard!');
        });
}

function toggleEraserMode() {
    isErasing = !isErasing;
    isDrawing = false; // Disable drawing when eraser is active
    updateControlButtons();
}

function updateControlButtons() {
    const copyButton = document.getElementById('copy-button');
    const saveButton = document.getElementById('save-image-button');
    const clearButton = document.getElementById('clear-button');
    const eraserButton = document.getElementById('eraser-button');

    // Deselect all emoji items when eraser is active
    if (isErasing) {
        document.querySelectorAll('.emoji-item').forEach(item => {
            item.classList.remove('active');
        });
    }

    // Update eraser button state
    if (isErasing) {
        eraserButton.classList.add('is-active');
    } else {
        eraserButton.classList.remove('is-active');
    }

    // We don't need to change states of copy, save, and clear buttons based on drawing/erasing
    // They are always active when visible.

    // Ensure only one mode (drawing or erasing) is visually active at a time
    if (!isErasing && !isDrawing && selectedEmoji) {
        // Find the active emoji item and mark it as active if no mode is selected
         document.querySelectorAll('.emoji-item').forEach(item => {
            if (item.textContent === selectedEmoji) {
                item.classList.add('active');
            } else {
                 item.classList.remove('active');
            }
        });
    }
     if (!isErasing && !selectedEmoji) {
         // If no emoji is selected and not erasing, clear any active emoji styling
         document.querySelectorAll('.emoji-item').forEach(item => {
            item.classList.remove('active');
        });
     }
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