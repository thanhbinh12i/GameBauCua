import { Button } from "antd";
import { useDispatch } from "react-redux";

function QuanCuoc(props) {
      const dispatch = useDispatch();
      const { quanCuoc } = props;
      return (
            <>
                  <div>
                        <img src={quanCuoc.hinhAnh} alt="" />
                        <div className="bg-success mt-2 pb-2 text-center" style={{ borderRadius: '10px', width: 250 }}>
                              <Button  onClick={() => {


                                    dispatch({
                                          type: 'DAT_CUOC_BAU_CUA',
                                          quanCuoc,
                                          tangGiam: true
                                    })
                              }} className="btn btn-danger mr-3">+</Button>


                              <span className="mt-2" style={{ color: 'yellow', fontSize: 25 }}>{quanCuoc.diemCuoc}</span>


                              <Button onClick={() => {


                                    dispatch({
                                          type: 'DAT_CUOC_BAU_CUA',
                                          quanCuoc,
                                          tangGiam: false
                                    })
                              }} className="btn btn-danger ml-3">-</Button>
                        </div>
                  </div>
            </>
      )
}
export default QuanCuoc;