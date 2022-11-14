function setPageTitle(title){
    ks.setNavigationBarTitle({
        title: title,
        success: (res) => {
        },
        fail: (res) => {
        },
      });
}

module.exports.setPageTitle = setPageTitle;