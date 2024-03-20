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
        question: `<p>Module 1 Topic 2 Question</p>`, 
        answer: `<p>Module 1 Topic 2 Answer</p>`,
        solution: `<img src="assets/images/logo.png"></img>`,
        mastered: false
    },
    {
        name: "Expand Three Brackets",
        moduleCode: 1,
        questionCode: 3,
        question: `<p>Module 1 Topic 3 Question</p>`, 
        answer: `<p>Module 1 Topic 3 Answer</p>`,
        solution: `<img src="assets/images/logo.png"></img>`,
        mastered: false
    }]
},
{
    name: "module2",
    content: [
    {
        name: "Solving one step equation",
        moduleCode: 2,
        questionCode: 1,
        question: `<p>Module 2 Topic 1 Question</p>`, 
        answer: `<p>Module 2 Topic 1 Answer</p>`,
        solution: `<img src="assets/images/logo.png"></img>`,
        mastered: false
    },
    {
        name: "Solve two step equations",
        moduleCode: 2,
        questionCode: 2,
        question: `<p>Module 2 Topic 2 Question</p>`, 
        answer: `<p>Module 2 Topic 2 Answer</p>`,
        solution: `<img src="assets/images/logo.png"></img>`,
        mastered: false
    },
    {
        name: "Solve complex equations",
        moduleCode: 2,
        questionCode: 3,
        question: `<p>Module 2 Topic 3 Question</p>`, 
        answer: `<p>Module 2 Topic 3 Answer</p>`,
        solution: `<img src="assets/images/logo.png"></img>`,
        mastered: false
    }]
}
]
