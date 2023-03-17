import { Query, Resolver } from '@nestjs/graphql';
import { TestService } from './test.service';

@Resolver()
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  @Query(() => String)
  test(): string {
    return this.testService.test();
  }
}
