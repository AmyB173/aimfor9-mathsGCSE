// the question and answer values contain long mathml code, collapse questions and answers for 
// better readability
export let modules = [
    {
    name: "module1",
    displayName: "Expanding Brackets",
    content: [
    {
        name: "Expand single brackets with complex powers",
        moduleCode: 1,
        questionCode: 1,
        question: `<math display='block'>
        <semantics>
         <mrow>
          <mn>2</mn><msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mi>y</mi><mi>z</mi><mo stretchy='false'>(</mo><mn>4</mn><mi>x</mi><msup>
           <mi>y</mi>
           <mn>5</mn>
          </msup>
          <mo>&#x2212;</mo><mi>z</mi><mo stretchy='false'>)</mo></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaaIYa
         GaamiEamaaCaaaleqabaGaaGOmaaaakiaadMhacaWG6bGaaiikaiaa
         isdacaWG4bGaamyEamaaCaaaleqabaGaaGynaaaakiabgkHiTiaadQ
         hacaGGPaaaaa@4233@
         </annotation>
        </semantics>
       </math>
       `, 
        answer: `<math display='block'>
        <semantics>
         <mrow>
          <mn>8</mn><msup>
           <mi>x</mi>
           <mn>3</mn>
          </msup>
          <msup>
           <mi>y</mi>
           <mn>6</mn>
          </msup>
          <mi>z</mi><mo>&#x2212;</mo><mn>2</mn><msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mi>y</mi><msup>
           <mi>z</mi>
           <mn>2</mn>
          </msup>
          </mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaaI4a
         GaamiEamaaCaaaleqabaGaaG4maaaakiaadMhadaahaaWcbeqaaiaa
         iAdaaaGccaWG6bGaeyOeI0IaaGOmaiaadIhadaahaaWcbeqaaiaaik
         daaaGccaWG5bGaamOEamaaCaaaleqabaGaaGOmaaaaaaa@42BC@
         </annotation>
        </semantics>
       </math>
       `,
        solution: `<img src="assets/images/solutions/11.webp">`,
        mastered: false
    },
    {
        name: "Expand Two Brackets",
        moduleCode: 1,
        questionCode: 2,
        question: `<math display='block'>
        <semantics>
         <mrow>
          <mo stretchy='false'>(</mo><mn>4</mn><mi>x</mi><mo>&#x2212;</mo><mn>2</mn><mo stretchy='false'>)</mo><mo stretchy='false'>(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy='false'>)</mo></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaGGOa
         GaaGinaiaadIhacqGHsislcaaIYaGaaiykaiaacIcacaaIZaGaamiE
         aiabgUcaRiaaigdacaGGPaaaaa@4003@
         </annotation>
        </semantics>
       </math>
       `, 
        answer: `<math display='block'>
        <semantics>
         <mrow>
          <mn>12</mn><msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mo>&#x2212;</mo><mn>2</mn><mi>x</mi><mo>&#x2212;</mo><mn>2</mn></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaaIXa
         GaaGOmaiaadIhadaahaaWcbeqaaiaaikdaaaGccqGHsislcaaIYaGa
         amiEaiabgkHiTiaaikdaaaa@3E4C@
         </annotation>
        </semantics>
       </math>
       `,
        solution: `<img src="assets/images/solutions/12.webp">`,
        mastered: false
    },
    {
        name: "Expand Three Brackets",
        moduleCode: 1,
        questionCode: 3,
        question: `<math display='block'>
        <semantics>
         <mrow>
          <mo stretchy='false'>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy='false'>)</mo><mo stretchy='false'>(</mo><mi>x</mi><mo>&#x2212;</mo><mn>2</mn><mo stretchy='false'>)</mo><mo stretchy='false'>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy='false'>)</mo></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaGGOa
         GaamiEaiabgUcaRiaaigdacaGGPaGaaiikaiaadIhacqGHsislcaaI
         YaGaaiykaiaacIcacaWG4bGaey4kaSIaaG4maiaacMcaaaa@427D@
         </annotation>
        </semantics>
       </math>
       `, 
        answer: `<math display='block'>
        <semantics>
         <mrow>
          <msup>
           <mi>x</mi>
           <mn>3</mn>
          </msup>
          <mo>+</mo><mn>2</mn><msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mo>&#x2212;</mo><mn>5</mn><mi>x</mi><mo>&#x2212;</mo><mn>6</mn></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaWG4b
         WaaWbaaSqabeaacaaIZaaaaOGaey4kaSIaaGOmaiaadIhadaahaaWc
         beqaaiaaikdaaaGccqGHsislcaaI1aGaamiEaiabgkHiTiaaiAdaaa
         a@406B@
         </annotation>
        </semantics>
       </math>
       `,
        solution: `<img src="assets/images/solutions/13.webp">`,
        mastered: false
    }]
},
{
    name: "module2",
    displayName: "Factorising",
    content: [
    {
        name: "Factorising",
        moduleCode: 2,
        questionCode: 1,
        question: `<math display='block'>
        <semantics>
         <mrow>
          <mn>16</mn><msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mi>y</mi><msup>
           <mi>z</mi>
           <mn>3</mn>
          </msup>
          <mo>&#x2212;</mo><mn>24</mn><mi>x</mi><msup>
           <mi>z</mi>
           <mn>2</mn>
          </msup>
          </mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaaIXa
         GaaGOnaiaadIhadaahaaWcbeqaaiaaikdaaaGccaWG5bGaamOEamaa
         CaaaleqabaGaaG4maaaakiabgkHiTiaaikdacaaI0aGaamiEaiaadQ
         hadaahaaWcbeqaaiaaikdaaaaaaa@423E@
         </annotation>
        </semantics>
       </math>
       `, 
        answer: `<math display='block'>
        <semantics>
         <mrow>
          <mn>8</mn><mi>x</mi><msup>
           <mi>z</mi>
           <mn>2</mn>
          </msup>
          <mo stretchy='false'>(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>z</mi><mo>&#x2212;</mo><mn>3</mn><mi>z</mi><mo stretchy='false'>)</mo></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaaI4a
         GaamiEaiaadQhadaahaaWcbeqaaiaaikdaaaGccaGGOaGaaGOmaiaa
         dIhacaWG5bGaamOEaiabgkHiTiaaiodacaWG6bGaaiykaaaa@41FF@
         </annotation>
        </semantics>
       </math>
       `,
        solution: `<img src="assets/images/solutions/21.webp">`,
        mastered: false
    },
    {
        name: "Factorising",
        moduleCode: 2,
        questionCode: 2,
        question: `<math display='block'>
        <semantics>
         <mrow>
          <msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mo>&#x2212;</mo><mn>2</mn><mi>x</mi><mo>&#x2212;</mo><mn>120</mn></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaWG4b
         WaaWbaaSqabeaacaaIYaaaaOGaeyOeI0IaaGOmaiaadIhacqGHsisl
         caaIXaGaaGOmaiaaicdaaaa@3E4A@
         </annotation>
        </semantics>
       </math>
       `, 
        answer: `<math display='block'>
        <semantics>
         <mrow>
          <mo stretchy='false'>(</mo><mi>x</mi><mo>&#x2212;</mo><mn>12</mn><mo stretchy='false'>)</mo><mo stretchy='false'>(</mo><mi>x</mi><mo>+</mo><mn>10</mn><mo stretchy='false'>)</mo></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaGGOa
         GaamiEaiabgkHiTiaaigdacaaIYaGaaiykaiaacIcacaWG4bGaey4k
         aSIaaGymaiaaicdacaGGPaaaaa@3FFD@
         </annotation>
        </semantics>
       </math>
       `,
        solution: `<img src="assets/images/solutions/22.webp">`,
        mastered: false
    },
    {
        name: "Factorising",
        moduleCode: 2,
        questionCode: 3,
        question: `<math display='block'>
        <semantics>
         <mrow>
          <msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mo>&#x2212;</mo><mn>36</mn></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaWG4b
         WaaWbaaSqabeaacaaIYaaaaOGaeyOeI0IaaG4maiaaiAdaaaa@3AF0@
         </annotation>
        </semantics>
       </math>
       `, 
        answer: `<math display='block'>
        <semantics>
         <mrow>
          <mo stretchy='false'>(</mo><mi>x</mi><mo>+</mo><mn>6</mn><mo stretchy='false'>)</mo><mo stretchy='false'>(</mo><mi>x</mi><mo>&#x2212;</mo><mn>6</mn><mo stretchy='false'>)</mo></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaGGOa
         GaamiEaiabgUcaRiaaiAdacaGGPaGaaiikaiaadIhacqGHsislcaaI
         2aGaaiykaaaa@3E91@
         </annotation>
        </semantics>
       </math>
       `,
        solution: `<img src="assets/images/solutions/23.webp">`,
        mastered: false
    },
    {
        name: "Solve complex equations",
        moduleCode: 2,
        questionCode: 4,
        question: `<math display='block'>
        <semantics>
         <mrow>
          <mn>6</mn><msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mo>+</mo><mi>x</mi><mo>&#x2212;</mo><mn>2</mn></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaaI2a
         GaamiEamaaCaaaleqabaGaaGOmaaaakiabgUcaRiaadIhacqGHsisl
         caaIYaaaaa@3CCE@
         </annotation>
        </semantics>
       </math>
       `, 
        answer: `<math display='block'>
        <semantics>
         <mrow>
          <mo stretchy='false'>(</mo><mn>2</mn><mi>x</mi><mo>&#x2212;</mo><mn>1</mn><mo stretchy='false'>)</mo><mo stretchy='false'>(</mo><mi>x</mi><mo>&#x2212;</mo><mn>6</mn><mo stretchy='false'>)</mo></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaGGOa
         GaaGOmaiaadIhacqGHsislcaaIXaGaaiykaiaacIcacaWG4bGaeyOe
         I0IaaGOnaiaacMcaaaa@3F53@
         </annotation>
        </semantics>
       </math>
       `,
        solution: `<img src="assets/images/solutions/24.webp">`,
        mastered: false
    },
    {
        name: "Factorising",
        moduleCode: 2,
        questionCode: 5,
        question: `<math display='block'>
        <semantics>
         <mrow>
          <mn>4</mn><msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mo>&#x2212;</mo><mn>25</mn></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaaI0a
         GaamiEamaaCaaaleqabaGaaGOmaaaakiabgkHiTiaaikdacaaI1aaa
         aa@3BAC@
         </annotation>
        </semantics>
       </math>
       `, 
        answer: `<math display='block'>
        <semantics>
         <mrow>
          <mo stretchy='false'>(</mo><mn>2</mn><mi>x</mi><mo>&#x2212;</mo><mn>5</mn><mo stretchy='false'>)</mo><mo stretchy='false'>(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo stretchy='false'>)</mo></mrow>
         <annotation encoding='MathType-MTEF'>MathType@MTEF@5@5@+=
         feaahGart1ev3aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
         hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
         4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
         vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
         fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaWiecaGGOa
         GaaGOmaiaadIhacqGHsislcaaI1aGaaiykaiaacIcacaaIYaGaamiE
         aiabgUcaRiaaiwdacaGGPaaaaa@4007@
         </annotation>
        </semantics>
       </math>
       `,
        solution: `<img src="assets/images/solutions/25.webp">`,
        mastered: false
    }]
}
]
