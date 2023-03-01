import{_ as a,c as n,o as l,b as s,d as e,a as t}from"./app.4602495e.js";const w=JSON.parse('{"title":"Clean code, Horrible Performance","description":"","frontmatter":{"title":"Clean code, Horrible Performance","layout":"doc","created":"2023-03-01T13:59:10 (UTC +01:00)","tags":[],"source":"https://www.computerenhance.com/p/clean-code-horrible-performance","author":"Casey Muratori"},"headers":[],"relativePath":"general/clean-code-horrible-performance.md"}'),p={name:"general/clean-code-horrible-performance.md"},o=s("h1",{id:"clean-code-horrible-performance-by-casey-muratori",tabindex:"-1"},[e('"Clean" Code, Horrible Performance - by Casey Muratori '),s("a",{class:"header-anchor",href:"#clean-code-horrible-performance-by-casey-muratori","aria-hidden":"true"},"#")],-1),c=s("p",null,[e("source: "),s("a",{href:"https://www.computerenhance.com/p/clean-code-horrible-performance",target:"_blank",rel:"noreferrer"},"https://www.computerenhance.com/p/clean-code-horrible-performance"),e(" this is a really interesting read that has been temporarily put here until i find a better solution to link & preserve blog posts like this")],-1),i=s("blockquote",null,[s("p",null,'Many programming "best practices" taught today are performance disasters waiting to happen.')],-1),r=s("iframe",{src:"https://www.youtube-nocookie.com/embed/tD5NrevFtbU?rel=0&autoplay=0&showinfo=0&enablejsapi=0",frameborder:"0",loading:"lazy",gesture:"media",allow:"autoplay; fullscreen",allowautoplay:"true",allowfullscreen:"true",width:"728",height:"409"},null,-1),h=t(`<p><em>This is a free bonus video from the Performance-Aware Programming series. It shows the real-world performance costs of following “clean code” guidelines. For more information about the course, please see the <a href="https://www.computerenhance.com/about" target="_blank" rel="noreferrer">About</a> page or the <a href="https://www.computerenhance.com/p/table-of-contents" target="_blank" rel="noreferrer">Table of Contents</a>.</em></p><p><em>A lightly-edited transcript of the video appears below.</em></p><p>Some of the most-often repeated programming advice, especially to beginner programmers, is that they should be writing “clean” code. That moniker is accompanied by a long list of rules that tell you what you should do in order for your code to be “clean”.</p><p>A large portion of these rules don&#39;t actually affect the runtime of the code that you write. These sorts of rules cannot be objectively assessed, and we don&#39;t necessarily have to because they&#39;re fairly arbitrary at that point. However, several “clean” code rules — some of the ones most emphatically stressed — are things we <em>can</em> objectively measure because they <em>do</em> affect the runtime behavior of the code.</p><p>If you look at a “clean” code summary and pull out the rules that actually affect the structure of your code, you get:</p><ul><li>Prefer polymorphism to “if/else” and “switch”</li><li>Code should not know about the internals of objects it’s working with</li><li>Functions should be small</li><li>Functions should do one thing</li><li>“DRY” - Don’t Repeat Yourself</li></ul><p>These rules are rather specific about how any particular piece of code should be created in order for it to be “clean”. What I would like to ask is, if we create a piece of code that follows these rules, how does it perform?</p><p>In order to construct what I would consider the most favorable case for a “clean” code implementation of something, I used existing example code contained in “clean” code literature. This way, I am not making anything up, I’m just assessing “clean” code advocates’ rules using the example code they give to illustrate those rules.</p><p>If you look at “clean” code examples, you&#39;ll often see an example like this:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 22</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    shape_base() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class square : public shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    square(f32 SideInit) : Side(SideInit) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() {return Side*Side;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Side;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class rectangle : public shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    rectangle(f32 WidthInit, f32 HeightInit) : Width(WidthInit), Height(HeightInit) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() {return Width*Height;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Width, Height;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class triangle : public shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    triangle(f32 BaseInit, f32 HeightInit) : Base(BaseInit), Height(HeightInit) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() {return 0.5f*Base*Height;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Base, Height;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class circle : public shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    circle(f32 RadiusInit) : Radius(RadiusInit) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() {return Pi32*Radius*Radius;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Radius;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>It’s a base class for a shape with a few specific shapes derived from it: circle, triangle, rectangle, square. We then have a virtual function that computes the area.</p><p>Like the rules demand, we are preferring polymorphism. Our functions do only one thing. They are small. All that good stuff. So we end up with a “clean” class hierarchy, with each derived class knowing how to compute its own area, and storing the data required to compute that area.</p><p>If we image using this hierarchy to do something — say, finding the total area of a series of shapes that we pass in — we would expect to see something like this:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 23</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 TotalAreaVTBL(u32 ShapeCount, shape_base **Shapes)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(u32 ShapeIndex = 0; ShapeIndex &lt; ShapeCount; ++ShapeIndex)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum += Shapes[ShapeIndex]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return Accum;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>You&#39;ll notice I haven&#39;t used an iterator here because there was nothing in the rules that suggested you had to use iterators. As such, I figured I would give “clean” code the benefit of the doubt and not add any kind of abstracted iterator that might confuse the compiler and lead to worse performance.</p><p>You may also notice that this loop is over an array of <em>pointers</em>. This is a direct consequence of using a class hierarchy: we have no idea how big in memory each of these shapes might be. So unless we were going to add another virtual function call to get the data size of each shape, and use some kind of a variable skipping procedure to go through them, we need pointers to find out where each shape actually begins.</p><p>Because this is an accumulation, there&#39;s a loop-carried dependency here which might slow the loop down. Since accumulation can be reordered arbitrarily, I also wrote a hand-unrolled version just to be safe:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 24</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 TotalAreaVTBL4(u32 ShapeCount, shape_base **Shapes)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum0 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum1 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum2 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum3 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    u32 Count = ShapeCount/4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(Count--)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum0 += Shapes[0]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum1 += Shapes[1]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum2 += Shapes[2]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum3 += Shapes[3]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        Shapes += 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Result = (Accum0 + Accum1 + Accum2 + Accum3);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>If I run these two routines in a simple test harness, I can get a rough measure of the total number of cycles per shape that are required to do that operation:</p><p><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdd6e15d8-0cfa-4215-9ac9-5930c52c0c7e_1920x1080.png" alt=""></p><p>The harness times the code in two different ways. The first way is running the code only once, to show what happens in an arbitrary “cold” state — the data should be in L3 but L2 and L1 have been flushed, and the branch predictor has not “practiced” on the loop.</p><p>The second way is running the code many times repeatedly, to see what happens when the cache and branch predictor are operating in their most favorable way for the loop. Note that none of these are hard-core measurements, because as you’ll see, the differences we’ll be looking at are so large that we don’t need to break out any serious analysis tools.</p><p>What we can see from the results is there&#39;s not much of a difference between the two routines. It&#39;s around 35 cycles to do the “clean” code area calculation on a shape. Maybe it gets down more towards 34 sometimes if you&#39;re really lucky.</p><p>So 35 cycles is what we can expect from following all the rules. What would happen if instead we violated <em>just</em> the first rule? Instead of using polymorphism here, what if we just use a switch statement instead</p><p>?</p><p>Here I&#39;ve written the exact same code, but instead of writing it using a class hierarchy (and therefore, at runtime, a vtable), I&#39;ve written it using an enum and a shape type that flattens everything into one struct:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 25</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">enum shape_type : u32</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Shape_Square,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Shape_Rectangle,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Shape_Triangle,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Shape_Circle,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    Shape_Count,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">struct shape_union</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    shape_type Type;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Width;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Height;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 GetAreaSwitch(shape_union Shape)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Result = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    switch(Shape.Type)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Square: {Result = Shape.Width*Shape.Width;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Rectangle: {Result = Shape.Width*Shape.Height;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Triangle: {Result = 0.5f*Shape.Width*Shape.Height;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Circle: {Result = Pi32*Shape.Width*Shape.Width;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Count: {} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return Result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>This is the “old school” way you would have written this before “clean” code.</p><p>Note that because we no longer have specific datatypes for every shape variant, if a type doesn’t have one of the values in question (like “height”, for example), it simply doesn’t use it.</p><p>Now, instead of getting the area from a virtual function call, a user of this struct gets it from a function with a switch statement: exactly the thing that a “clean” code lecture would tell you to <em>never</em> <em>ever do</em>. Even so, you’ll note that the code, despite being much more concise, is basically the same. Each case of the switch statement is just the same code as the corresponding virtual function in the class hierarchy.</p><p>For the summation loops themselves, you can see that they are nearly identical to the “clean” version:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 26</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 TotalAreaSwitch(u32 ShapeCount, shape_union *Shapes)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    for(u32 ShapeIndex = 0; ShapeIndex &lt; ShapeCount; ++ShapeIndex)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum += GetAreaSwitch(Shapes[ShapeIndex]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return Accum;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 TotalAreaSwitch4(u32 ShapeCount, shape_union *Shapes)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum0 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum1 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum2 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum3 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    ShapeCount /= 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(ShapeCount--)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum0 += GetAreaSwitch(Shapes[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum1 += GetAreaSwitch(Shapes[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum2 += GetAreaSwitch(Shapes[2]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum3 += GetAreaSwitch(Shapes[3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        Shapes += 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Result = (Accum0 + Accum1 + Accum2 + Accum3);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The only difference is that instead of calling a member function to get the area, we call a regular function. That’ sit.</p><p>However, you can already see an immediate benefit from using the flattened structure as compare to a class hierarchy: the shapes can just be in an array, no pointers necessary. There is no indirection because we’ve made all our shapes the same size.</p><p>Plus, we get the added benefit that the compiler can now see <em>exactly</em> what we&#39;re doing in this loop, because it can just look at the <em>GetAreaSwitch</em> function and see the entire codepath. It doesn’t have to assume that <em>anything</em> might happen in some virtualized area function only known at run-time.</p><p>So with those benefits, what can the compiler do for us? If I run all four together now, these are the results:</p><p><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F229bd86c-3578-4f2a-94d1-2085e13da44a_1920x1080.png" alt=""></p><p>When we look at the results, we see something rather remarkable: just that one change — writing the code the old fashioned way rather than the “clean” code way — gave us an immediate 1.5x performance increase. That’s a free 1.5x for not doing anything other than removing the extraneous stuff required to use C++ polymorphism.</p><p>So by violating the first rule of clean code — which is one of its central tenants — we are able to drop from 35 cycles per shape to 24 cycles per shape, impling that code following that rule number is 1.5x <em>slower</em> than code that doesn’t. To put that in in hardware terms, it would be like taking an iPhone 14 Pro Max and reducing it to an iPhone 11 Pro Max. It&#39;s three or four years of hardware evolution <em>erased</em> because somebody said to use polymorphism instead of switch statements.</p><p>But we&#39;re only just getting started.</p><p>What if we broke <em>more</em> rules? What if we also broke the second rule, “no internal knowledge”? What if our functions <em>could</em> use knowledge of what they were actually operating on to make themselves more efficient?</p><p>If you look back at the get area switch statement, one of the things you can see is that all the area computations are <em>similar</em>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">        case Shape_Square: {Result = Shape.Width*Shape.Width;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Rectangle: {Result = Shape.Width*Shape.Height;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Triangle: {Result = 0.5f*Shape.Width*Shape.Height;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Circle: {Result = Pi32*Shape.Width*Shape.Width;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>They all do something like width times height, or width times width, optionally with a coefficient like π. and then they&#39;re gonna multiply by half in the case of a triangle or pie in the case of a circle, something like this.</p><p>This is actually one of the reasons that — unlike “clean” code advocates — I think switch statements are great! They make this kind of pattern <em>very easy to see</em>. When your code is organized by <em>operation</em>, rather than by <em>type</em>, it’s straightforward to observe and pull out common patterns. By contrast, if you were to look back at the class version, you would probably never notice this kind of pattern because not only is there a lot more boilerplate in the way, but “clean” code advocates recommend putting each class <em>in a separate file</em>, making it <em>even less likely</em> you’ll ever notice something like this.</p><p>So architecturally I disagree with class hierarchies in general, but that&#39;s beside the point. The only point I really want to make right now is that we can simplify this switch statement quite a bit by noticing the pattern.</p><p>And remember: this is not an example that I picked! This is the example that clean code advocates themselves use for illustrative purposes. So I didn’t intentionally pick an example where you happen to be able to pull out a pattern — it’s just <em>very likely</em> that you can do this, because most things of similar type have similar algorithmic structure, so as expected, it happens here.</p><p>To exploit this pattern, we can introduce a simple table that says what the coefficient is that we need to use for each type. If we then make our single-parameter types like circle and square <em>duplicate</em> their width into their height, we can make a <em>dramatically</em> simpler function for area:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 27</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 const CTable[Shape_Count] = {1.0f, 1.0f, 0.5f, Pi32};</span></span>
<span class="line"><span style="color:#A6ACCD;">f32 GetAreaUnion(shape_union Shape)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Result = CTable[Shape.Type]*Shape.Width*Shape.Height;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The two summation loops for this version are exactly the same — they don’t have to be changed, they can just call <em>GetAreaUnion</em> instead of <em>GetAreaSwitch</em>, and be otherwise identical.</p><p>Let&#39;s see what happens if we run this new version against our previous loops:</p><p><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd9729482-f173-4f47-a8b8-7def1d09395f_1920x1080.png" alt=""></p><p>What you can see here is that by taking advantage of what we know about the actual types we have — effectively switching from a <em>type</em>-based mindset to a <em>function</em>-based mindset — we get a <em>massive</em> speed increase. We&#39;ve gone from a switch statement that was merely 1.5x faster to a table-driven version that’s fully <em>10x faster</em> or more on the exact same problem.</p><p>And to do this, we used nothing other than one table lookup and a single line of code! It’s not only much <em>faster</em>, it’s also <em>much less semantically complex</em>. It’s less tokens, less operations, less lines of code.</p><p>So by fusing our data model with our desired operation, rather than demanding that the operation not know the internals, we got all the way down to the 3.0-3.5 cycles per shape range. That&#39;s a <em>10x</em> speed improvement over the “clean” code version that follows the first two rules.</p><p>10x is so large a performance increase, it&#39;s not even possible to put it in iPhone terms because iPhone benchmarks don&#39;t go back far enough. If I went all the way back to the iPhone 6, which is the oldest phone still showing up on modern benchmarks, it&#39;s only about three times slower than the iPhone 14 Pro Max. So we can&#39;t even use phones anymore to describe this difference.</p><p>If we were to look at single-thread desktop performance, a 10x speed improvement is like going from the average <a href="https://www.cpubenchmark.net/year-on-year.html" target="_blank" rel="noreferrer">CPU mark</a> today all the way back to the average CPU mark from 2010! The first two rules of the “clean code” concept wipe out <em>12 years</em> of hardware evolution, all by themselves.</p><p>But as shocking as that is, this test if only doing a very simple operation. We’re not really using “functions should be small” and “functions should do only one thing” much, because we only have one very simple thing to do in the first place. What if we <em>add</em> another aspect to our problem so that we can follow those rules more directly?</p><p>Here I have written the exact same hierarchy that we had before, but this time I’ve added one more virtual function which tells us the number of corners each shape has:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 32</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    shape_base() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual u32 CornerCount() = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class square : public shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    square(f32 SideInit) : Side(SideInit) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() {return Side*Side;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual u32 CornerCount() {return 4;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Side;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class rectangle : public shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    rectangle(f32 WidthInit, f32 HeightInit) : Width(WidthInit), Height(HeightInit) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() {return Width*Height;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual u32 CornerCount() {return 4;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Width, Height;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class triangle : public shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    triangle(f32 BaseInit, f32 HeightInit) : Base(BaseInit), Height(HeightInit) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() {return 0.5f*Base*Height;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual u32 CornerCount() {return 3;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Base, Height;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class circle : public shape_base</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    circle(f32 RadiusInit) : Radius(RadiusInit) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual f32 Area() {return Pi32*Radius*Radius;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual u32 CornerCount() {return 0;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Radius;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>A rectangle has four corners, a triangle has three, a circle has none, etc. I&#39;m then going to change the definition of the problem from computing the sum of the <em>areas</em> of a series of shapes, to computing the sum of the <em>corner-weighted</em> areas, which I’m going to define as one over one plus the number of corners.</p><p>Much like the area summation, there&#39;s no reason for this, I’m just trying to work within the example. I added the simplest possible thing I could think of, then did some very basic math on it.</p><p>To update the “clean” summation loop, we add the necessary math and the additional virtual function call:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">f32 CornerAreaVTBL(u32 ShapeCount, shape_base **Shapes)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(u32 ShapeIndex = 0; ShapeIndex &lt; ShapeCount; ++ShapeIndex)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum += (1.0f / (1.0f + (f32)Shapes[ShapeIndex]-&gt;CornerCount())) * Shapes[ShapeIndex]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return Accum;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 CornerAreaVTBL4(u32 ShapeCount, shape_base **Shapes)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum0 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum1 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum2 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum3 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    u32 Count = ShapeCount/4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(Count--)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum0 += (1.0f / (1.0f + (f32)Shapes[0]-&gt;CornerCount())) * Shapes[0]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum1 += (1.0f / (1.0f + (f32)Shapes[1]-&gt;CornerCount())) * Shapes[1]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum2 += (1.0f / (1.0f + (f32)Shapes[2]-&gt;CornerCount())) * Shapes[2]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum3 += (1.0f / (1.0f + (f32)Shapes[3]-&gt;CornerCount())) * Shapes[3]-&gt;Area();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        Shapes += 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Result = (Accum0 + Accum1 + Accum2 + Accum3);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>I <em>could</em> argue that I should pull this out into <em>another</em> function, adding <em>yet another</em> layer of indirection. But again, to give the “clean” code the benefit of the doubt, I will leave it explicitly in there.</p><p>To update the switch-statement version, we make essentially the same changes. First, we add another switch statement for the number of corners, with cases that exactly mirror the hierarchy version:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 34</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">u32 GetCornerCountSwitch(shape_type Type)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    u32 Result = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    switch(Type)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Square: {Result = 4;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Rectangle: {Result = 4;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Triangle: {Result = 3;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Circle: {Result = 0;} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        case Shape_Count: {} break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return Result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Then we compute the exact same thing as the hierarchy version:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 35</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 CornerAreaSwitch(u32 ShapeCount, shape_union *Shapes)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    for(u32 ShapeIndex = 0; ShapeIndex &lt; ShapeCount; ++ShapeIndex)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum += (1.0f / (1.0f + (f32)GetCornerCountSwitch(Shapes[ShapeIndex].Type))) * GetAreaSwitch(Shapes[ShapeIndex]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return Accum;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 CornerAreaSwitch4(u32 ShapeCount, shape_union *Shapes)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum0 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum1 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum2 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Accum3 = 0.0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    ShapeCount /= 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(ShapeCount--)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum0 += (1.0f / (1.0f + (f32)GetCornerCountSwitch(Shapes[0].Type))) * GetAreaSwitch(Shapes[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum1 += (1.0f / (1.0f + (f32)GetCornerCountSwitch(Shapes[1].Type))) * GetAreaSwitch(Shapes[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum2 += (1.0f / (1.0f + (f32)GetCornerCountSwitch(Shapes[2].Type))) * GetAreaSwitch(Shapes[2]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Accum3 += (1.0f / (1.0f + (f32)GetCornerCountSwitch(Shapes[3].Type))) * GetAreaSwitch(Shapes[3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        Shapes += 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Result = (Accum0 + Accum1 + Accum2 + Accum3);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Just like in the total area version, the code looks almost identical between the class hierarchy implementation and the switch implementation. The only difference is whether we call a virtual function or go through a switch statement.</p><p>Moving on to the table-driven case, you can see how awesome it actually is when we fuse operations and data together! Unlike all the other versions, in this version, the <em>only</em> thing that has to change is the values in our table! We don&#39;t actually have to get secondary information about our shape — we can weld both the corner count <em>and</em> the area coefficient directly into the table, and the code <em>stays exactly the same otherwise:</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* ========================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">   LISTING 36</span></span>
<span class="line"><span style="color:#A6ACCD;">   ======================================================================== */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f32 const CTable[Shape_Count] = {1.0f / (1.0f + 4.0f), 1.0f / (1.0f + 4.0f), 0.5f / (1.0f + 3.0f), Pi32};</span></span>
<span class="line"><span style="color:#A6ACCD;">f32 GetCornerAreaUnion(shape_union Shape)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f32 Result = CTable[Shape.Type]*Shape.Width*Shape.Height;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>If we run all of these “corner area” functions, we can look at how their performance is affected by the addition of the second shape property:</p><p><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcbb6dfeb-f038-4c3c-bfde-0cd50169fe51_1920x1080.png" alt=""></p><p>As you can see, these results are <em>even worse</em> for the “clean” code. The switch statement version, which was previously only 1.5x faster, is now nearly 2x faster, and the lookup table version is nearly <em>15x faster</em>.</p><p>This demonstrates the even deeper problem with “clean” code: the more complex you make the problem, the <em>more</em> these ideas harm your performance. When you try to scale up “clean” techniques to real objects with many properties, you will suffer these pervasive performance penalties <em>everywhere</em> in your code.</p><p>The more you use the “clean” code methodology, the less a compiler is able to see what you&#39;re doing. Everything is in separate translation units, behind virtual function calls, etc. No matter how smart the compiler is, there’s very little it can do with that kind of code.</p><p>And to make matters worse, there’s not much <em>you</em> can do with that kind of code either! As I showed before, simple things like pulling values out into a table and removing switch statements are <em>simple</em> to achieve if your codebase is architected around it’s <em>functions</em>. If instead it is architected around it’s <em>types</em>, it is much more difficult — perhaps even impossible without extensive rewrites.</p><p>So we&#39;ve gone from a 10x speed difference to a 15x speed difference just be adding one more property to our shapes. That&#39;s like pushing 2023 hardware all the way back to 2008! Instead of erasing 12 years, we&#39;re erasing <em>14 years</em> just by adding one new parameter to our definition of the problem.</p><p>That&#39;s horrible in and of itself. But you&#39;ll notice, I haven’t even mentioned optimization yet! Other than ensuring there wasn’t a loop-carried dependency, for testing purposes, I haven’t <em>optimized</em> anything!</p><p>Here&#39;s what it looks like if I run these routines against a lightly optimized AVX version of the same calculation:</p><p><img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2df69737-d8ac-43b2-954a-ea098ef8c4a2_1920x1080.png" alt=""></p><p>The speed differences range from <em>20-25x</em> — and of course, none of the AVX-optimized code uses anything remotely like “clean” code principles.</p><p>So that’s four rules down the drain. What about number five?</p><p>Honestly, “don’t repeat yourself” seems fine. As you saw from the listings, we <em>didn&#39;t</em> really repeat ourselves much. Maybe if you count the four-accumulator unrolled versions we did, but that was just for demonstration purposes. You don’t <em>actually</em> have to have both routines unless you’re doing timings like this.</p><p>If “DRY” means something more stringent — like don&#39;t build two different tables that both encode versions of the same coefficients — well then I might disagree with that sometimes, because we may have to do that for reasonable performance. But if in general “DRY” just means don&#39;t write the exact same code twice, that sounds like reasonable advice.</p><p>And most importantly, we <em>don’t</em> have to violate it to write code that gets reasonable performance.</p><p>So out of the five clean code things that actually affect code structure, I would say you have <em>one</em> you might want to think about and <em>four</em> you definitely shouldn&#39;t. Why? Because as you may have noticed, software is <em>extremely slow</em> these days. It performs <em>very, very poorly</em> compared to how fast modern hardware can actually do the things we need our software to do.</p><p>If you ask why software is slow, there are several answers. Which one is most dominant depends on the specific development environment and coding methodology.</p><p>But for a certain segment of the computing industry, the answer to “why is software so slow” is in large part “because of ‘clean’ code”. The ideas underlying the “clean” code methodology are almost all horrible for performance, and you shouldn’t do them.</p><p>The “clean” code rules were developed because someone thought they would produce more maintainable codebases. Even if that were true, you’d have to ask, “At what cost?”</p><p>It simply cannot be the case that we&#39;re willing to give up a <em>decade</em> or more of hardware performance just to make programmers’ lives a little bit easier. Our job is to write programs that run well on the hardware that we are given. If this is how bad these rules cause software to perform, they simply <em>aren&#39;t acceptable</em>.</p><p>We can still try to come up with rules of thumb that help keep code organized, easy to maintain, and easy to read. Those aren&#39;t bad goals! But these rules ain’t it. They need to stop being said unless they are accompanied by a big old asterisk that says, “and your code will get 15 times slower or more when you do them.”</p>`,93),A=[o,c,i,r,h];function C(u,y,d,m,f,g){return l(),n("div",null,A)}const b=a(p,[["render",C]]);export{w as __pageData,b as default};
