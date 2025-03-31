package kz.postkz.Gateway.filter;

import kz.postkz.Gateway.utils.JwtService;
import kz.postkz.Gateway.utils.RouteValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class JwtAuthenticationFilter extends AbstractGatewayFilterFactory<JwtAuthenticationFilter.Config> {

	@Autowired
	private JwtService jwtService;

	@Autowired
	private RouteValidator validator;

	public JwtAuthenticationFilter() {
		super(Config.class);
	}

	public static class Config {
	}

	@Override
	public GatewayFilter apply(Config config) {
		return (exchange, chain) -> {
			if (exchange.getRequest().getMethod().equals(HttpMethod.OPTIONS)) {
				return chain.filter(exchange);
			}

			if (validator.isSecured.test(exchange.getRequest())) {
				String authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);

				if (authHeader == null || !authHeader.startsWith("Bearer ")) {
					return onError(exchange, HttpStatus.UNAUTHORIZED);
				}

				String jwt = authHeader.substring(7);

				if (!jwtService.CheckToken(jwt) || !jwtService.isTokenValid(jwt)) {
					return onError(exchange, HttpStatus.UNAUTHORIZED);
				}
			}

			return chain.filter(exchange);
		};
	}

	private Mono<Void> onError(ServerWebExchange exchange, HttpStatus httpStatus) {
		ServerHttpResponse response = exchange.getResponse();
		response.setStatusCode(httpStatus);
		response.getHeaders().set("Access-Control-Allow-Origin", "http://localhost:3000");
		response.getHeaders().set("Access-Control-Allow-Credentials", "true");
		return response.setComplete();
	}
}
