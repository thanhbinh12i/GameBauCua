const initialState = {
      danhSachCuoc: [
            { ma: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
            { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
            { ma: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
            { ma: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
            { ma: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
            { ma: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 },
      ],
      tongDiem: 1000,
      mangXucXac: [
            { ma: 'nai', hinhAnh: './img/nai.png' },
            { ma: 'cua', hinhAnh: './img/cua.png' },
            { ma: 'tom', hinhAnh: './img/tom.png' },
      ]
}
const GameBauCuaReducer = (state = initialState, action) => {
      switch (action.type) {
            case 'DAT_CUOC_BAU_CUA': {
                  const danhSachCuocUpdate = [...state.danhSachCuoc];
                  const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
                  if (index !== -1) {
                        if (action.tangGiam) {
                              if (state.tongDiem > 0) {
                                    danhSachCuocUpdate[index].diemCuoc += 100;
                                    state.tongDiem -= 100;
                              }
                        } else {
                              if (danhSachCuocUpdate[index].diemCuoc > 0) {
                                    danhSachCuocUpdate[index].diemCuoc -= 100;
                                    state.tongDiem += 100;
                              }
                        }
                  }

                  state.danhSachCuoc = danhSachCuocUpdate;
                  return { ...state }
            }
            case 'PLAY_GAME_BAU_CUA': {
                  const mangXucXacNgauNhien = [];
                  for (let i = 0; i < 3; i++) {
                        let soNgauNhien = Math.floor(Math.random() * 6);
                        const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
                        mangXucXacNgauNhien.push(xucXacNgauNhien);
                  }
                  state.mangXucXac = mangXucXacNgauNhien;
                  mangXucXacNgauNhien.forEach((item, index) => {
                        let indexDSCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === item.ma);
                        if (index !== -1) {
                              state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
                        }
                  })
                  state.danhSachCuoc.forEach((item, index) => {
                        let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn => xxnn.ma === item.ma);
                        if (indexXucXacNN != -1) {
                              state.tongDiem += item.diemCuoc;
                        }
                  })
                  state.danhSachCuoc = state.danhSachCuoc.map((item, index) => {
                        return { ...item, diemCuoc: 0 }
                  })
                  return { ...state };
            }
            case 'CHOI_LAI': {
                  state.tongDiem = 1000;
                  state.danhSachCuoc = state.danhSachCuoc.map((item, index) => {
                        return { ...item, diemCuoc: 0 }
                  });
                  return { ...state }
            }

            default:
                  return state;
      }
}
export default GameBauCuaReducer;