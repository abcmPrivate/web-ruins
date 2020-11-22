const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// 管理者用のメールテンプレート
const adminContents = (data) => {
  return `以下内容でWeb拍手を受け付けました。

内容：
${data.message}
`;
};

exports.sendMail = functions.region('asia-northeast1').https.onCall(async (data, _context) => {
  // メール設定
  const adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: 'Web拍手のメッセージを受け付けました',
    text: adminContents(data),
  };

  // 管理者へのメール送信
  try {
    await mailTransport.sendMail(adminMail);
  } catch (e) {
    console.error(`send failed. ${e}`);
    throw new functions.https.HttpsError('internal', 'send failed');
  }
});
