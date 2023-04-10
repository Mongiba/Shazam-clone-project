class WorkletProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
      const input = inputs[0][0];
      this.port.postMessage(input.buffer);
      return true;
    }
  }
  
  registerProcessor('worklet-processor', WorkletProcessor);
  