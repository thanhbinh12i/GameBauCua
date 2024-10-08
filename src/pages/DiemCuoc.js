import { Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";

function DiemCuoc() {
      const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem)
      const dispatch = useDispatch();
      return (
            <>
                  <div>
                        <Typography.Title level={1} style={{ color: 'red', marginTop: 0, textAlign: 'center' }}>
                              GAME BẦU CUA BINHDAYNEE
                        </Typography.Title>
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                              <Typography.Text style={{ fontSize: '20px', borderRadius: '5%', padding: '1rem' }}>
                                    Tiền thưởng:
                                    <Typography.Text>
                                          {tongDiem.toLocaleString()}$
                                    </Typography.Text>
                              </Typography.Text>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                              <Button onClick={() => {dispatch({type: 'CHOI_LAI'}) }}
                                    style={{ fontSize: '15px', borderRadius: '5%', border: 'none' }}>
                                    Chơi lại
                              </Button>
                        </div>

                  </div>
            </>
      )
}
export default DiemCuoc;