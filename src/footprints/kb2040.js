// Arduino ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face v
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    batteryPins: false,

    Bminus: {type: 'net', value: 'B-'},
    RAW: {type: 'net', value: 'RAW'},
    GND: {type: 'net', value: 'GND'},
    RST: {type: 'net', value: 'RST'},
    VCC: {type: 'net', value: 'VCC'},
    GP29: {type: 'net', value: 'GP29'},
    GP28: {type: 'net', value: 'GP28'},
    GP27: {type: 'net', value: 'GP27'},
    GP26: {type: 'net', value: 'GP26'},
    GP18: {type: 'net', value: 'GP18'},
    GP20: {type: 'net', value: 'GP20'},
    GP19: {type: 'net', value: 'GP19'},
    GP10: {type: 'net', value: 'GP10'},
    
    Bplus: {type: 'net', value: 'B+'},
    GP0: {type: 'net', value: 'GP0'},
    GP1: {type: 'net', value: 'GP1'},
    GP2: {type: 'net', value: 'GP2'},
    GP3: {type: 'net', value: 'GP3'},
    GP4: {type: 'net', value: 'GP4'},
    GP5: {type: 'net', value: 'GP5'},
    GP6: {type: 'net', value: 'GP6'},
    GP7: {type: 'net', value: 'GP7'},
    GP8: {type: 'net', value: 'GP8'},
    GP9: {type: 'net', value: 'GP9'}
  },
  body: p => {
    function standard(silk_layer) {
      return `
        (module ProMicro (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${silk_layer}) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${silk_layer}) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
        ${''/* illustration of the (possible) USB port overhang */}
        (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer Dwgs.User) (width 0.15))
      
        ${''/* component outline */}
        (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer ${silk_layer}) (width 0.15))
        (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer ${silk_layer}) (width 0.15))
        (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer ${silk_layer}) (width 0.15))
        (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer ${silk_layer}) (width 0.15))
      `
    }

    function pins(def_neg, def_pos, silk_layer, font_effect) {
      return `
        ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start -15.24 ${def_pos}6.35) (end -12.7 ${def_pos}6.35) (layer ${silk_layer}) (width 0.15))
        (fp_line (start -15.24 ${def_pos}6.35) (end -15.24 ${def_pos}8.89) (layer ${silk_layer}) (width 0.15))
        (fp_line (start -12.7 ${def_pos}6.35) (end -12.7 ${def_pos}8.89) (layer ${silk_layer}) (width 0.15))
      
        ${''/* pin names */}
        (fp_text user RAW (at -13.97 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at -11.43 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user RST (at -8.89 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user 3V (at -6.35 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP29 (at -3.81 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP28 (at -1.27 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP27 (at 1.27 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP26 (at 3.81 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP18 (at 6.35 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP20 (at 8.89 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP19 (at 11.43 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP10 (at 13.97 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))

        (fp_text user GP0 (at -13.97 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP1 (at -11.43 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at -8.89 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at -6.35 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP2 (at -3.81 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP3 (at -1.27 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP4 (at 1.27 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP5 (at 3.81 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP6 (at 6.35 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP7 (at 8.89 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP8 (at 11.43 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP9 (at 13.97 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        ${''/* and now the actual pins */}
        (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RAW.str})
        (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RST.str})
        (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VCC.str})
        (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP29.str})
        (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP28.str})
        (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP27.str})
        (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP26.str})
        (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP18.str})
        (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP20.str})
        (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP19.str})
        (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP10.str})

        (pad 13 thru_hole circle (at -13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP0.str})
        (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP1.str})
        (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP2.str})
        (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP3.str})
        (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP4.str})
        (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP5.str})
        (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP6.str})
        (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP7.str})
        (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP8.str})
        (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP9.str})

      `
    }

    function batteryPins(p, def_neg, def_pos, silk_layer, font_effect) {
      if(p.batteryPins) {
        return `
          (fp_text user "B+" (at -16.51 ${def_neg}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
          (fp_text user "B-" (at -16.51 ${def_pos}4.8 ${p.rot + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))

          (pad 25 thru_hole roundrect (at -16.51 ${def_neg}7.62 0) (size 1.5 1.5) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) (roundrect_rratio 0.25) ${p.Bplus.str})
          (pad 26 thru_hole roundrect (at -16.51 ${def_pos}7.62 0) (size 1.5 1.5) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) (roundrect_rratio 0.25) ${p.Bminus.str})
        `
      } else {
        return ''
      }
    }

    if(p.orientation == 'down') {
      return `
        ${standard('B.SilkS')}
        ${pins('-', '', 'B.SilkS', '(justify mirror)')}
        ${batteryPins(p, '-', '', 'B.SilkS', '(justify mirror)')})
        `
    } else {
      return `
        ${standard('F.SilkS')}
        ${pins('', '-', 'F.SilkS', '')}
        ${batteryPins(p, '', '-', 'F.SilkS', '')})
        `
    }
  }
}