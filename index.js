async function makeIssue() {
    const token = process.env.GH_TOKEN; // 주의 일치 필요 (env와)
    // 변경1
    const OWNER = "23MinL" // github 이름
    // 변경2
    const REPO = "github_clone_actions" // 레포지터리 이름
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify({
        title: "행운의 숫자" //변경3
        body: `${Math.floor(Math.random()*100)+1}`, //변경4
        })
    });
    if ( response.ok) {
        console.log("성공");
    } else {
        console.log("실패");
    }
    
}

makeIssue();