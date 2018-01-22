
import { 
    Link
} from 'react-router-dom'

export default () => (
    <div>
        <h1>导航栏</h1> 
        <ul>
            <li><Link to="/">首页</Link></li>    
            <li><Link to="/cate">分类页</Link></li>
            <li><Link to="/12/album">专辑列表</Link></li>
            <li><Link to="/12/album/12">专辑详情</Link></li>
            <li><Link to="/13/sound">声音列表</Link></li>
            <li><Link to="/13/sound/13">声音详情</Link></li> 
            <li><Link to="/13/no">个人中心匹配不到</Link></li> 
            <li><Link to="/no">所有的匹配不到</Link></li> 
        </ul>
    </div>
    
)