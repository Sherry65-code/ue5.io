// 1st home page

about = `With Unreal Engine, you can bring amazing real-time experiences to life using the world’s most advanced real-time 3D creation tool.
From first projects to the most demanding challenges, our free and accessible resources and inspirational community empower everyone to realize their ambitions.`

points = {
	"Build bigger worlds": "Think big, really big. Unreal Engine 5 provides the tools and assets you need to create truly expansive worlds for your players, participants, and stakeholders to explore, using content that scales. ",
	"Leverage game-changing fidelity": "Bring incredibly immersive and realistic interactive experiences to life with groundbreaking features like Nanite and Lumen that provide a generational leap in visual fidelity, and enable worlds to be fully dynamic.",
	"Animate and model in context": "Artist-friendly animation authoring, rigging, retargeting, and runtime tools—together with a continually expanding modeling toolset—reduce iteration and eliminate round-tripping, speeding up the creative process."
}

const rec_req = {
	"Operating system": "Windows 10 64bit (version 20H2)",
	"Processor": "Six core Xeon E5-2643 @ 3.4Ghz",
	"Memory": "64GB RAM",
	"Internal Storage": "256GB SSD",
	"External Storage": "2TB SSD",
	"Graphics card": "NVIDIA GeForce RTX 2080 SUPER",
	"External tools": "Xoreax Incredibuild (Dev Tools Package)"
}

// Lighting - 1. global illumination 2.sky lighting 3.reflections

global_illumination = `Lumen is Unreal Engine 5's fully dynamic global illumination and reflections system that is designed for next-generation consoles, and it is the default global illumination and reflections system. Lumen renders diffuse interreflection with infinite bounces and indirect specular reflections in large, detailed environments at scales ranging from millimeters to kilometers.
Lumen brings robust dynamic global illumination to Unreal Engine and integrates well with other supporting systems in Unreal Engine 5, such as Nanite, World Partition, and Virtual Shadow Maps.`

sky_lighting = `Sky lighting is solved as part of Lumen's Final Gather process. It includes sky shadowing, allowing indoor space to be much darker than outdoor lighting, providing a much more natural effect.`

reflections = `Lumen solves indirect specular, or reflections, for the full range of material roughness values. Diffuse global illumination and shadowed skylight can be seen in all reflections. Lumen Reflections also support Clear Coat materials.`