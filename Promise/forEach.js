function getInitPage() { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve([{
                name:Math.random()
            }])
        },500)
    })
}

function getData() { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve([{
                tag:1,
                initPage:getInitPage
            }, {
                tag: 2,
                initPage:getInitPage    
            }])
        },500)
    })
}

function Async() { 
    const branch = [{
        name:1,
        data:getData,
    }, {
        name:2,    
        data:getData,   
    }]
    return new Promise((resolve, reject) => { 
        const _ret = []
        branch.map( async (item) => { 
            const datas = await item.data()
            datas.map(async (page) => { 
                const _page = await page.initPage()
                _ret.push({
                    name: item.name,
                    tag:page.tag,
                    data:_page
                }) 
                resolve(_ret)
            })                         
        })        
    })
}

Async().then(data => { 
    console.log('结果',data)
})