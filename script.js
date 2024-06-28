document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('diary-app');

    // ヘッダーを作成
    const header = document.createElement('header');
    header.innerHTML = '<h1>たっちゃん日記</h1>';
    app.appendChild(header);

    // 日記エントリーを作成する関数
    function createDiaryEntry(date, title, content) {
        const entry = document.createElement('article');
        entry.className = 'diary-entry';
        entry.innerHTML = `
            <h2>${date}</h2>
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        return entry;
    }

    // 日記エントリーを追加
    const entries = [
        createDiaryEntry('2024年6月28日', '今日の出来事', '今日は雨で湿気がすごかったです。昨日教わったVSCodeでホームページ作成に挑戦しています。'),
        createDiaryEntry('2024年6月27日', '友達との会話', '久しぶりに同期の友達と電話で話しました。転職の話をしました。'),
        createDiaryEntry('2024年6月26日', '地元凱旋', '久しぶりに東海村に行きました。治安良さげでした。')
    ];

    // メインコンテンツを作成
    const main = document.createElement('main');
    entries.forEach(entry => main.appendChild(entry));
    app.appendChild(main);

    // 新しい日記エントリーを追加するフォーム
    const form = document.createElement('form');
    form.innerHTML = `
        <h3>新しい日記を書く</h3>
        <input type="date" id="new-date" required>
        <input type="text" id="new-title" placeholder="タイトル" required>
        <textarea id="new-content" placeholder="今日はどんな1日でしたか？" required></textarea>
        <button type="submit">保存</button>
    `;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const date = new Date(document.getElementById('new-date').value).toLocaleDateString('ja-JP', {year: 'numeric', month: 'long', day: 'numeric'});
        const title = document.getElementById('new-title').value;
        const content = document.getElementById('new-content').value;
        const newEntry = createDiaryEntry(date, title, content);
        main.insertBefore(newEntry, main.firstChild);
        form.reset();
    });
    app.appendChild(form);

    // フッターを作成
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2024　たっちゃん日記</p>';
    app.appendChild(footer);
});