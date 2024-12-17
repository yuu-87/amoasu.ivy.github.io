document.addEventListener("DOMContentLoaded", () => {
  // ランダムで「クルーメイト」か「インポスター」を選ぶ機能
  const resultButton = document.createElement('button');
  resultButton.textContent = "あなたの役職を確認";
  document.querySelector("#features").appendChild(resultButton);

  resultButton.addEventListener("click", () => {
      const roles = ["クルーメイト", "インポスター"];
      const randomRole = roles[Math.floor(Math.random() * roles.length)];
      alert(`あなたの役職は: ${randomRole}`);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const impostersInfo = [
      { name: "ベント移動", description: "船内を高速で移動できます。" },
      { name: "サボタージュ", description: "重要なシステムを破壊して混乱を起こします。" },
      { name: "嘘をつく能力", description: "他のプレイヤーをだます才能に長けています。" }
  ];

  const crewmatesInfo = [
      { name: "タスク完了", description: "全てのタスクを終えて勝利を目指します。" },
      { name: "緊急会議", description: "怪しい行動を報告して他プレイヤーと話し合います。" },
      { name: "監視カメラ", description: "特定のエリアを監視して不審な動きを確認します。" }
  ];

  // 能力クリックで詳細を表示
  const displayAbilityDetails = (role, abilities) => {
      const container = document.querySelector(`#${role}`);
      abilities.forEach((ability) => {
          const button = document.createElement('button');
          button.textContent = ability.name;
          button.style.display = 'block';
          button.style.marginTop = '10px';

          button.addEventListener('click', () => {
              alert(`${ability.name}: ${ability.description}`);
          });

          container.appendChild(button);
      });
  };

  displayAbilityDetails("imposters", impostersInfo);
  displayAbilityDetails("crewmates", crewmatesInfo);
});
