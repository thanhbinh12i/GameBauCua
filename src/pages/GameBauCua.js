import { Row, Col } from 'antd';
import DiemCuoc from "./DiemCuoc";
import DanhSachCuoc from './DanhSachCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import "./XucXacItem.css"
function GameBauCua() {
      return (
            <>
                  <div id="GameBauCua" style={{ margin: 0 }}>

                        <DiemCuoc />

                        <Row gutter={16}>
                              <Col span={16}>
                                    <DanhSachCuoc />
                              </Col>
                              <Col span={8}>
                                    <DanhSachXucXac />
                              </Col>
                        </Row>

                  </div>
            </>
      )
}
export default GameBauCua;