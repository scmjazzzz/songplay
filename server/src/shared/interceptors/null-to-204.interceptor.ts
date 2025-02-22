import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable, map } from 'rxjs'

@Injectable()
export class NullTo204Interceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse()

    return next.handle().pipe(
      map((data) => {
        if (data === null) {
          response.status(204).send()
          return null
        }
        return data
      }),
    )
  }
}
