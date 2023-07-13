module.exports = {
  // GET / 開發人員可以連上後端入口，檢視伺服器是否正常運作
  getRoot: (req, res) => {
    res.status(200).json({
      status: "200 (OK)",
      message: "伺服器運作中",
      test: "目前無測試新功能",
    });
  },
};
