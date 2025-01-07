document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    // メニューアイコンをクリックしたときにメニューを表示/非表示
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

    // ダウンロードタスクの動作
    const startDownloadButton = document.getElementById("start-download");
    const progressBar = document.getElementById("progress-bar");
    const downloadStatus = document.getElementById("download-status");

    startDownloadButton.addEventListener("click", () => {
        downloadStatus.textContent = "ダウンロード中...";
        progressBar.style.width = "0%";

        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.style.width = `${progress}%`;

            if (progress >= 100) {
                clearInterval(interval);
                downloadStatus.textContent = "ダウンロード完了！";
            }
        }, 500);
    });



