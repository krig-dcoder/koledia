function openDiary(card) {
    const modal = document.getElementById("diaryModal");
    const content = document.getElementById("modalText");

    content.innerHTML = card.innerHTML;
    modal.style.display = "flex";
}

function closeDiary() {
    document.getElementById("diaryModal").style.display = "none";
}