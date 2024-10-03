import { Col, Row } from 'antd';
import { useSelector } from 'react-redux'
import QuanCuoc from './QuanCuoc';
function DanhSachCuoc() {
      const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc);
      const renderDanhSachCuoc = () => {
            return danhSachCuoc.map((item, index) => {
                  return <Col span={8} key={index}>
                        <QuanCuoc quanCuoc={item} />
                  </Col>
            })
      }
      return (
            <>
                  <Row gutter={20}>
                        {renderDanhSachCuoc()}
                  </Row>
            </>
      )
}
export default DanhSachCuoc;