defineClass('JSPathManager.ViewController', {
    viewDidLoad: function() {
        console.log('4')
        self.ORIGviewDidLoad()
        console.log('js viewDidLoad end')
    },

    testLog: function() {
        console.log('js ViewController testlog')
    },

    tableView_numberOfRowsInSection: function(tableView, section) {
        return 10
    }
})

defineClass('SwiftDemo.TestObject', {
    testLog: function() {
        console.log('js TestObject testlog')
    }
})