import { connect } from 'react-redux'
import Report from './report'

const mapStateToProps = state => ({
    operations: state
})
export default connect(mapStateToProps)(Report)