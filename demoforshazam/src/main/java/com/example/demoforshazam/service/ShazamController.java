package com.example.demoforshazam.service;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Arrays;
import java.util.Base64;

@RestController
public class ShazamController {
	//@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/detect-song")
	public ResponseEntity<String> detectSong(@RequestBody byte[] requestBody) throws IOException, InterruptedException {
	    // Convert audio data from audio/webm to audio/pcm format
	    ProcessBuilder pb = new ProcessBuilder(
	            "ffmpeg",
	            "-y", // overwrite output file if it exists
	            "-i", "-", // read input from stdin
	            "-ac", "1", // set audio channels to 1 (mono)
	            "-ar", "44100", // set sample rate to 44100 Hz
	            "-acodec", "pcm_s16le", // set audio codec to 16-bit PCM
	            "-f", "s16le", // set output format to raw 16-bit PCM
	            "-"
	    );
	    pb.redirectErrorStream(true);
	    Process process = pb.start();
	    OutputStream outputStream = process.getOutputStream();
	    outputStream.write(requestBody);
	    outputStream.close();

	    // Get the output of the ffmpeg command
	    InputStream inputStream = process.getInputStream();
	    byte[] outputBytes = inputStream.readAllBytes();
	    inputStream.close();
	    process.waitFor(); // wait for ffmpeg to finish

	    // Encode the output as base64 and send it to the Shazam API
	    String audioBase64 = Base64.getEncoder().encodeToString(outputBytes);
	    String url = "https://shazam.p.rapidapi.com/songs/detect";
	    String apiKey = "8fe747a7e2msh368cf251f254574p17270bjsn1f22b710d3bd";

	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.TEXT_PLAIN);
	    headers.set("X-RapidAPI-Host", "shazam.p.rapidapi.com");
	    headers.set("X-RapidAPI-Key", apiKey);
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity<String> entity = new HttpEntity<>(audioBase64, headers);

	    RestTemplate restTemplate = new RestTemplate();
	    ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);

	    return response;
	}
}