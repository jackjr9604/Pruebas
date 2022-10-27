// AND   y    &&
// OR    o    ||   ALT 124
// NOT   no    !

// tabla de la verdad

p         q         p && q      p || q      !p

true      true      true        true        false
true      false     false       true        false
false     true      false       true        true
false     false     false       false       true


a && b
//cojo los valores de p y q
    //opero con la negacion de !a y !b
        //opero con el or
            // y opero con la negacion !()
      !(!a  || !b)   <==> a && b // en la tablña de verdad tienen el mismo resultado
T T     F F   F   T
T F     F T   T   F
F T     T F   T   F
F F     T T   T   F
