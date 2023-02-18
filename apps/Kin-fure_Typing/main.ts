// Compiled using kinfure_typing 1.0.0 (TypeScript 4.9.4)
// 書き込み先のシート
var url = 'https://docs.google.com/spreadsheets/d/1Xg3KTSR2Z6HFSC14f9Al7nX5r_f90aJm64tz8ZyyCLQ/edit#gid=0';
var words_sheet = SpreadsheetApp.openByUrl(url).getSheetByName('words');
var score_sheet = SpreadsheetApp.openByUrl(url).getSheetByName('score');
// URLを開いた時に実行される
function doGet() {
    // index.htmlを読み込む
    var htmlTemplate = HtmlService.createTemplateFromFile('index');
    // 単語関連を読み込む
    // 配列へシート全体を読み込む getRange（開始行、開始列, データを読み込む行数, データを読み込む列数）
    var words_info = words_sheet.getDataRange().getValues();
    // ヘッダー行の削除
    words_info.shift();
    htmlTemplate.words_info = words_info;
    // 問題リストとスコアを読み込む
    var score_info = score_sheet.getDataRange().getValues();
    score_info.shift();
    htmlTemplate.score_info = score_info;
    return htmlTemplate.evaluate()
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setTitle('Kinfure_Typing');
}
// 単語テストで満点だった時に，スコアを更新する
function update_score(li_No) {
    score_sheet.getRange(li_No, 4).setValue('Clear!🎉');
}
