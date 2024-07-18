async function initWebGPU() {
    // Check if WebGPU is supported
    if (!navigator.gpu) {
        console.error("WebGPU is not supported in this browser.");
        return;
    }

    // Request an adapter
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
        console.error("Failed to get GPU adapter.");
        return;
    }

    // Request a device
    const device = await adapter.requestDevice();
    if (!device) {
        console.error("Failed to get GPU device.");
        return;
    }

    console.log("WebGPU initialized successfully!");
}

initWebGPU();
