import { Button, Col, Row } from "antd";
import Xucxac from "./Xucxac";
import { useDispatch, useSelector } from "react-redux";

function DanhSachXucXac() {
      const dispatch = useDispatch();
      const mangXucXac = useSelector(state => state.GameBauCuaReducer.mangXucXac);
      return (
            <>
                  <div className="">
                        <div style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}>
                              <Row>
                                    <Col span={24} style={{ marginTop: '75px', textAlign: "center" }}>
                                          <Xucxac xucXacItem={mangXucXac[0]} />
                                    </Col>
                              </Row>
                              <Row style={{ marginTop: -20 }}>
                                    <Col span={8}>
                                          <Xucxac xucXacItem={mangXucXac[1]} />
                                    </Col>
                                    <Col span={8}>
                                          <Xucxac xucXacItem={mangXucXac[2]} />
                                    </Col>
                              </Row>
                        </div>
                        <div style={{ marginLeft: '20%', marginTop: '5%' }}>
                              <Button size="large" onClick={() => { dispatch({ type: 'PLAY_GAME_BAU_CUA', }) }}>Xốc</Button>
                        </div>
                  </div>
            </>
      )
}
export default DanhSachXucXac;